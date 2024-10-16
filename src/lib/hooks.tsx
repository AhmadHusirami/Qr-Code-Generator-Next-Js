import { generateQRCodeImg, generateQRCodeSVG } from "@/lib/utils";
import React, { useDeferredValue, useEffect } from "react";

export const useGenerateQRCode = () => {
  const [url, setUrl] = React.useState("");
  const [size, setSize] = React.useState("");
  const [color, setColor] = React.useState<string | undefined>();
  const [qrCode, setQrCode] = React.useState({
    img: "",
    svg: "",
  });
  const deferredColor = useDeferredValue(color);
  const generateQRCode = async () => {
    const QRCode = await generateQRCodeImg(url, parseInt(size), color);
    const QRCodeSVG = await generateQRCodeSVG(url, parseInt(size), color);
    setQrCode({ img: QRCode, svg: QRCodeSVG });
  };

  useEffect(() => {
    if (color) generateQRCode();
  }, [deferredColor]);

  return {
    url,
    setUrl,
    size,
    setSize,
    color,
    setColor,
    qrCode,
    generateQRCode,
  };
};
