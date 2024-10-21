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

// Define a type for the InfoDialog props
interface InfoDialogProps {
  data: Record<string, string | undefined>;
  onClose: () => void;
}

const InfoDialog: React.FC<InfoDialogProps> = ({ data, onClose }) => {
  const wifiData = {
    SSID: data["S"] || "N/A",
    SecurityType: data["T"] || "N/A",
    Password: data["P"] || "N/A",
    HiddenNetwork: data["H"] === "true" ? "Yes" : "No",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-black p-4 rounded-lg relative w-full max-w-sm">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          <Icons.close className="size-10 md:size-8 fill-current" />
        </button>
        <div className="text-center mb-2">WiFi QR Code Information</div>
        <div className="grid gap-2">
          {Object.entries(wifiData).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="font-semibold">{key}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { url, setUrl, size, setSize, setColor, qrCode, generateQRCode, showLimitDialog } = useGenerateQRCode();

  const disableButton = url === "" || size === "";
  const [showConfetti, setShowConfetti] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState<string>("environment");
  const [availableCameras, setAvailableCameras] = useState<{ id: string, label: string }[]>([]);
  const [qrCodeScanner, setQrCodeScanner] = useState<Html5Qrcode | null>(null);
  const [infoDialogData, setInfoDialogData] = useState<Record<string, string | undefined> | null>(null);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("qrCodeGenerationCount") || "0");
    const lastGenerationTime = parseInt(localStorage.getItem("lastGenerationTime") || "0");
    const oneDayInMillis = 4 * 60 * 60 * 1000;

    if (currentCount >= 5 && Date.now() - lastGenerationTime >= oneDayInMillis) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, []);

  useEffect(() => {
    if (scanning) {
      const qrReaderElement = document.getElementById("qr-reader");
      if (qrReaderElement) {
        const newQrCodeScanner = new Html5Qrcode("qr-reader");

        Html5Qrcode.getCameras().then((devices) => {
          setAvailableCameras(devices);
          const backCameraDevice = devices.find(device => device.label.toLowerCase().includes('back')) || devices[0];
          const cameraId = backCameraDevice.id;

          newQrCodeScanner
            .start(
              cameraId,
              { fps: 10, qrbox: 250 },
              (decodedText) => {
                newQrCodeScanner.stop().then(() => {
                  setScanning(false);
                  setQrCodeScanner(null);

                  if (decodedText.startsWith("WIFI:")) {
                    const wifiData = parseWiFiQRCode(decodedText);
                    setInfoDialogData(wifiData);
                  } else if (isValidUrl(decodedText)) {
                    window.open(decodedText, "_blank");
                  } else {
                    setInfoDialogData({ ProductName: decodedText });
                  }
                });
              },
              (errorMessage) => {
                // Do nothing for "NotFoundException"
              }
            )
            .catch((err) => console.error("Error starting QR code scanner", err));

          setQrCodeScanner(newQrCodeScanner);
        });
      }
    }
  }, [scanning]);

  // Function to parse WiFi QR code format
  const parseWiFiQRCode = (wifiString: string): Record<string, string | undefined> => {
    const regex = /WIFI:S:(.*?);T:(.*?);P:(.*?);H:(.*?);;/;
    const match = wifiString.match(regex);
    if (match) {
      return {
        S: match[1],
        T: match[2],
        P: match[3],
        H: match[4],
      };
    }
    return { S: undefined, T: undefined, P: undefined, H: undefined };
  };

  const isValidUrl = (string: string): boolean => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const stopScanning = () => {
    if (qrCodeScanner) {
      qrCodeScanner
        .stop()
        .then(() => {
          setScanning(false);
          setQrCodeScanner(null);
        })
        .catch((err) => console.error("Error stopping scanner", err));
    } else {
      setScanning(false);
    }
  };

  const closeInfoDialog = () => {
    setInfoDialogData(null);
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
          <CardDescription>Generate QR Codes effortlessly with our intuitive interface.</CardDescription>
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

      {scanning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black p-4 rounded-lg relative w-full max-w-sm">
            <button onClick={stopScanning} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              <Icons.close className="size-10 md:size-8 fill-current" />
            </button>
            <div className="text-center mb-2">Scan QR Code</div>

            {/* Camera selection dropdown */}
            <div className="my-2">
              <select
                value={selectedCamera}
                onChange={(e) => setSelectedCamera(e.target.value)}
                className="w-full p-2 border rounded"
              >
                {availableCameras.map((camera) => (
                  <option key={camera.id} value={camera.id}>
                    {camera.label}
                  </option>
                ))}
              </select>
            </div>

            <div id="qr-reader" className="w-full"></div>
          </div>
        </div>
      )}

      {infoDialogData && <InfoDialog data={infoDialogData} onClose={closeInfoDialog} />}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
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
