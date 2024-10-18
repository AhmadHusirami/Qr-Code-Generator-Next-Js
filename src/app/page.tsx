"use client";
import { SelectSize } from "@/components/select-size";
import { ShowQRcode } from "@/components/show-qrcode";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardFooterButton,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGenerateQRCode } from "@/lib/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Icons } from "@/components/ui/icons";
import QrScanner from "react-qr-scanner"; // Import the QR scanner

export default function Home() {
  const { url, setUrl, size, setSize, setColor, qrCode, generateQRCode, showLimitDialog, setShowLimitDialog } =
    useGenerateQRCode();

  const [showConfetti, setShowConfetti] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const disableButton = url === "" || size === "";

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("qrCodeGenerationCount") || "0");
    const lastGenerationTime = parseInt(localStorage.getItem("lastGenerationTime") || "0");
    const fourHoursInMillis = 4 * 60 * 60 * 1000;

    if (currentCount >= 5 && Date.now() - lastGenerationTime < fourHoursInMillis) {
      setShowLimitDialog(true);
    }
  }, []);

  const handleScan = (data: string | null) => {
    if (data) {
      setUrl(data); // Set the scanned URL
      setIsScanning(false); // Stop scanning
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const openScanner = () => {
    setIsScanning(true); // Start scanning
  };

  return (
    <main className="flex flex-col items-center md:justify-between justify-center md:container md:mt-24 mt-8">
      {showConfetti && <Confetti />}
      <Card className="w-full max-w-sm mx-auto border-[0px] md:border mt-24 md:mt-0">
        <CardHeader>
          <CardTitle className="text-2xl flex justify-between w-full">
            QR Code Generator
            <div onClick={openScanner} className="cursor-pointer block md:hidden"> {/* Show on small screens only */}
              <Icons.camera className="size-7 md:size-8 fill-current ml-2" />
            </div>
          </CardTitle>
          <CardDescription>
            Generate QR Codes effortlessly with our intuitive interface.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              type="text"
              placeholder="https://example.com"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Size</Label>
            <SelectSize setSize={setSize} size={size} />
          </div>
        </CardContent>
        <CardFooterButton>
          <ShowQRcode
            QRcode={qrCode}
            generateQRCode={generateQRCode}
            disableButton={disableButton}
            setColor={setColor}
            url={url}
            size={size}
            setSize={setSize}
            setShowConfetti={setShowConfetti}
            resetForm={() => {
              setUrl("");
              setSize("");
            }}
          />
        </CardFooterButton>
        <CardFooter></CardFooter>
      </Card>

      {/* Show the QR scanner when isScanning is true */}
      {isScanning && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <QrScanner
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%", height: "100%" }}
          />
          <button
            onClick={() => setIsScanning(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            X
          </button>
        </div>
      )}

      <ToastContainer />
    </main>
  );
}
