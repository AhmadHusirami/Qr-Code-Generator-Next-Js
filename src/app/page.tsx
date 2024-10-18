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

export default function Home() {
  const { url, setUrl, size, setSize, setColor, qrCode, generateQRCode, showLimitDialog, setShowLimitDialog } =
    useGenerateQRCode(); // Include setShowLimitDialog here

  const disableButton = url === "" || size === "";
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("qrCodeGenerationCount") || "0");
    const lastGenerationTime = parseInt(localStorage.getItem("lastGenerationTime") || "0");
    const fourHoursInMillis = 4 * 60 * 60 * 1000;

    // Check if the user is eligible to generate more QR codes
    if (currentCount >= 5 && Date.now() - lastGenerationTime < fourHoursInMillis) {
      setShowLimitDialog(true); // Use setShowLimitDialog instead
    }
  }, []);

  return (
    <main className="flex flex-col items-center md:justify-between justify-center md:container md:mt-24 mt-8">
      {showConfetti && <Confetti />}
      <Card className="w-full max-w-sm mx-auto border-[0px] md:border mt-24 md:mt-0">
        <CardHeader>
          <CardTitle className="text-2xl">QR Code Generator</CardTitle>
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
            {/* Pass size as a prop */}
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
            size={size} // Pass size prop here
            setSize={setSize} // Pass setSize prop here
            setShowConfetti={setShowConfetti}
            resetForm={() => {
              setUrl(""); // Reset URL
              setSize(""); // Reset size
            }}
          />
        </CardFooterButton>
        <CardFooter></CardFooter>
      </Card>
      <ToastContainer />
    </main>
  );
}
