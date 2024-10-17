import { generateQRCodeImg, generateQRCodeSVG } from "@/lib/utils";
import React, { useDeferredValue, useEffect, useState } from "react";

const MAX_QR_CODES = 5; // Maximum number of QR codes
const TIME_LIMIT = 4 * 60 * 60 * 1000; // 4 hours in milliseconds

export const useGenerateQRCode = () => {
  const [url, setUrl] = React.useState("");
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState<string | undefined>();
  const [qrCode, setQrCode] = React.useState({ img: "", svg: "" });
  const deferredColor = useDeferredValue(color);
  const [showLimitDialog, setShowLimitDialog] = useState(false);
  const [generatedCount, setGeneratedCount] = useState(0);
  const [lastGeneratedTime, setLastGeneratedTime] = useState<number | null>(null);

  const checkLimit = () => {
    const currentTime = Date.now();
    if (lastGeneratedTime) {
      const timeDiff = currentTime - lastGeneratedTime;
      if (timeDiff < TIME_LIMIT) {
        if (generatedCount >= MAX_QR_CODES) {
          setShowLimitDialog(true);
          return false;
        }
      } else {
        // Reset if time has exceeded the limit
        resetGenerationData();
      }
    }
    return true;
  };

  const resetGenerationData = () => {
    setGeneratedCount(0);
    setLastGeneratedTime(null);
    localStorage.removeItem("generatedCount");
    localStorage.removeItem("lastGeneratedTime");
  };

  const generateQRCode = async () => {
    if (!url || !size) return; // Return early if there's no URL or size
    if (!checkLimit()) return; // Check if the user can generate more codes

    // Generate QR codes
    const QRCode = await generateQRCodeImg(url, parseInt(size), deferredColor);
    const QRCodeSVG = await generateQRCodeSVG(url, parseInt(size), deferredColor);
    setQrCode({ img: QRCode, svg: QRCodeSVG });

    // Update generated count and last generated time
    const newCount = generatedCount + 1;
    setGeneratedCount(newCount);
    setLastGeneratedTime(Date.now());

    // Store updated count in local storage
    localStorage.setItem("generatedCount", newCount.toString());
    localStorage.setItem("lastGeneratedTime", Date.now().toString());
  };

  useEffect(() => {
    // Retrieve data from local storage on mount
    const count = parseInt(localStorage.getItem("generatedCount") || "0");
    const lastTime = parseInt(localStorage.getItem("lastGeneratedTime") || "0");
    setGeneratedCount(count);
    setLastGeneratedTime(lastTime);

    // Check if limit dialog should be shown
    if (count >= MAX_QR_CODES) {
      setShowLimitDialog(true);
    }
  }, []);
  
    useEffect(() => {
    if (deferredColor) {
      // Regenerate QR code with the new color without affecting the count
      const updateQRCodeColor = async () => {
        if (qrCode.img) {
          const updatedQRCode = await generateQRCodeImg(url, parseInt(size), deferredColor);
          const updatedQRCodeSVG = await generateQRCodeSVG(url, parseInt(size), deferredColor);
          setQrCode({ img: updatedQRCode, svg: updatedQRCodeSVG });
        }
      };
      updateQRCodeColor();
    }
  }, [deferredColor]);

  return {
    url,
    setUrl,
    size,
    setSize,
    color,
    setColor,
    qrCode,
    showLimitDialog,
    generateQRCode, // Ensure this is included in the return statement
  };
};
