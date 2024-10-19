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
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Icons } from "@/components/ui/icons";
import { Html5Qrcode } from "html5-qrcode";

export default function Home() {
  const { url, setUrl, size, setSize, setColor, qrCode, generateQRCode, showLimitDialog } =
    useGenerateQRCode();

  const disableButton = url === "" || size === "";
  const [showConfetti, setShowConfetti] = useState(false);
  const [scanning, setScanning] = useState(false); // Manage the visibility of the scanner dialog
  const [selectedCamera, setSelectedCamera] = useState("environment"); // Default to back camera
  const [qrCodeScanner, setQrCodeScanner] = useState<Html5Qrcode | null>(null); // Manage the QRCode scanner instance

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("qrCodeGenerationCount") || "0");
    const lastGenerationTime = parseInt(localStorage.getItem("lastGenerationTime") || "0");
    const oneDayInMillis = 4 * 60 * 60 * 1000;

    if (currentCount >= 5 && Date.now() - lastGenerationTime >= oneDayInMillis) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
    }
  }, []);

  // Start QR Code scanning after the modal is rendered
  useEffect(() => {
    if (scanning) {
      const qrReaderElement = document.getElementById("qr-reader");
      if (qrReaderElement) {
        const newQrCodeScanner = new Html5Qrcode("qr-reader");

        Html5Qrcode.getCameras().then((devices) => {
          const cameraId =
            selectedCamera === "environment" ? devices[0].id : devices[1]?.id || devices[0].id;

          // Show the toast message once when the scanner is opened
          toast.info("No QR code found. Please position a valid code in front of the camera.");

          newQrCodeScanner
            .start(
              cameraId,
              { fps: 10, qrbox: 250 },
              (decodedText) => {
                newQrCodeScanner.stop().then(() => {
                  setScanning(false);
                  setQrCodeScanner(null); // Clear the scanner instance
                  window.open(decodedText, "_blank"); // Open the decoded URL in a new tab
                });
              },
              (errorMessage) => {
                // Do nothing for "NotFoundException", as we've already shown the initial toast
              }
            )
            .catch((err) => {
              console.error("Error starting QR code scanner", err);
            });

          setQrCodeScanner(newQrCodeScanner); // Save the scanner instance
        });
      }
    }
  }, [scanning, selectedCamera]);

  // Close the scanning modal and stop the scanner
  const stopScanning = () => {
    if (qrCodeScanner) {
      qrCodeScanner
        .stop()
        .then(() => {
          setScanning(false);
          setQrCodeScanner(null); // Clear the scanner instance
        })
        .catch((err) => console.error("Error stopping scanner", err));
    } else {
      setScanning(false); // Fallback if the scanner isn't running
    }
  };

  return (
    <main className="flex flex-col items-center md:justify-between justify-center md:container md:mt-24 mt-8">
      {showConfetti && <Confetti />}
      <Card className="w-full max-w-sm mx-auto border-[0px] md:border mt-24 md:mt-0">
        <CardHeader>
          <CardTitle className="text-2xl flex justify-between w-full">
            QR Code Generator
            <div className="cursor-pointer block md:hidden" onClick={() => setScanning(true)}>
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
              setUrl(""); // Reset URL
              setSize(""); // Reset size
            }}
          />
        </CardFooterButton>
        <CardFooter></CardFooter>
      </Card>

      {/* QR Scanner Dialog */}
      {scanning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-full max-w-sm">
            <button
              onClick={stopScanning}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              X
            </button>
            <div className="text-center mb-2">Scan QR Code</div>
            <div id="qr-reader" className="w-full"></div>
            <div className="grid gap-2 mt-4">
              <Label>Camera</Label>
              <select
                value={selectedCamera}
                onChange={(e) => setSelectedCamera(e.target.value)}
                className="border rounded p-2"
              >
                <option value="environment">Back Camera</option>
                <option value="user">Front Camera</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-center" // Less intrusive position for toast
        autoClose={5000} // Auto-close after 5 seconds
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </main>
  );
}
