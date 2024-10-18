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

export default function Home() {
  const { url, setUrl, size, setSize, setColor, qrCode, generateQRCode, showLimitDialog, setShowLimitDialog } =
    useGenerateQRCode();

  const disableButton = url === "" || size === "";
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("qrCodeGenerationCount") || "0");
    const lastGenerationTime = parseInt(localStorage.getItem("lastGenerationTime") || "0");
    const fourHoursInMillis = 4 * 60 * 60 * 1000;

    // Check if the user is eligible to generate more QR codes
    if (currentCount >= 5 && Date.now() - lastGenerationTime < fourHoursInMillis) {
      setShowLimitDialog(true);
    }
  }, []);

  const openCamera = async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // For iOS, it is best to prompt the user to open the camera app directly
      window.location.href = "camera://";
    } else {
      // For Android or other devices, request camera access
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        // You can add additional logic to open the QR code scanner here
      } catch (err) {
        console.error("Error accessing camera: ", err);
        // Handle error (e.g., show a message to the user)
      }
    }
  };

  return (
    <main className="flex flex-col items-center md:justify-between justify-center md:container md:mt-24 mt-8">
      {showConfetti && <Confetti />}
      <Card className="w-full max-w-sm mx-auto border-[0px] md:border mt-24 md:mt-0">
        <CardHeader>
          <CardTitle className="text-2xl flex justify-between w-full">
            QR Code Generator
            <div onClick={openCamera} className="cursor-pointer block md:hidden"> {/* Show on small screens only */}
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
      <ToastContainer />
    </main>
  );
}
