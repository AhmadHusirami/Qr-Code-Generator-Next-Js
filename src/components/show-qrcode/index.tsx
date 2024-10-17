import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { downloadQRCode } from "@/lib/utils";
import { toast } from "react-toastify";
import { CopyClipboard } from "../copy-clipboard";
import { ColorPiker } from "../color-picker";

type ShowQRcodeProps = {
  QRcode: {
    img: string;
    svg: string;
  };
  generateQRCode: () => Promise<void>;
  disableButton?: boolean;
  setColor: (color: string) => void;
  url: string;
  setShowConfetti: (show: boolean) => void; // Add prop for confetti
};

export const ShowQRcode = ({
  QRcode,
  generateQRCode,
  disableButton,
  setColor,
  url,
  setShowConfetti,
}: ShowQRcodeProps) => {
  const handleDownloadCode = () => {
    downloadQRCode(QRcode.img);
    toast.success("QR Code downloaded successfully");
  };

  const isValidUrl = (url: string) => {
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlRegex.test(url);
  };

  const [timeLeft, setTimeLeft] = useState(0);
  const [showLimitDialog, setShowLimitDialog] = useState(false);
  const [isQRCodeDialogOpen, setIsQRCodeDialogOpen] = useState(false);

  const handleGenerateQRCode = async () => {
    if (!isValidUrl(url)) {
      toast.error("Invalid URL. Please enter a valid URL.");
      return;
    }

    const currentGenerationCount = parseInt(localStorage.getItem("qrCodeGenerationCount") || "0");

    // Check if the user can generate more QR codes
    if (currentGenerationCount < 5) {
      await generateQRCode(); // Ensure this is awaited

      // Increment and store the generation count after a successful generation
      const newGenerationCount = currentGenerationCount + 1;
      localStorage.setItem("qrCodeGenerationCount", newGenerationCount.toString());

      // Show the limit dialog if they reach the maximum number of generations
      if (newGenerationCount === 5) {
        const currentTime = Date.now();
        localStorage.setItem("lastGenerationTime", currentTime.toString());
      }
    } else {
      setShowLimitDialog(true); // Show dialog if already at the limit
    }
  };

  useEffect(() => {
    const checkLimitTime = () => {
      const limitDuration = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
      const lastGenerationTime = localStorage.getItem("lastGenerationTime");

      if (lastGenerationTime) {
        const elapsedTime = Date.now() - parseInt(lastGenerationTime);
        const remainingTime = Math.max(limitDuration - elapsedTime, 0);
        setTimeLeft(Math.floor(remainingTime / 1000));

        if (remainingTime > 0) {
          setShowLimitDialog(true); // Show limit dialog if limit period is still active
        }
      }
    };

    // Check for limit when component loads
    checkLimitTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      const limitDuration = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
      const lastGenerationTime = localStorage.getItem("lastGenerationTime");

      if (lastGenerationTime) {
        const elapsedTime = Date.now() - parseInt(lastGenerationTime);
        const remainingTime = Math.max(limitDuration - elapsedTime, 0);
        setTimeLeft(Math.floor(remainingTime / 1000));

        if (remainingTime <= 0) {
          localStorage.removeItem("qrCodeGenerationCount");
          localStorage.removeItem("lastGenerationTime");
          setShowLimitDialog(false);
          setShowConfetti(true); // Show confetti when the time is up

          // Set timeout to hide confetti after 5 seconds
          setTimeout(() => {
            setShowConfetti(false); // Hide confetti after 5 seconds
          }, 5000);
        }
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);



  const formatTimeLeft = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <>
      <Dialog
        open={isQRCodeDialogOpen}
        onOpenChange={(isOpen) => {
          setIsQRCodeDialogOpen(isOpen);
          // Check if limit dialog should be opened when QR Code dialog is closed
          if (!isOpen) {
            const currentGenerationCount = parseInt(localStorage.getItem("qrCodeGenerationCount") || "0");
            if (currentGenerationCount >= 5) {
              setShowLimitDialog(true);
            }
          }
        }}
      >
        <DialogTrigger asChild>
          <Button
            className="w-full"
            onClick={handleGenerateQRCode}
            disabled={disableButton}
          >
            Generate QR Code
          </Button>
        </DialogTrigger>
        {QRcode.img && isValidUrl(url) && (
          <DialogContent className="sm:max-w-[425px] max-w-[320px] rounded-lg">
            <DialogHeader>
              <DialogTitle>QR Code Generator</DialogTitle>
              <DialogDescription>
                QR Codes allow smartphone users to access your website simply and quickly.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <img
                src={QRcode.img}
                alt="QR code"
                className="mx-auto rounded-md"
              />
            </div>
            <DialogFooter className="flex-row justify-end gap-2">
              <Button type="submit" onClick={handleDownloadCode}>
                Download QR Code
              </Button>
              <CopyClipboard text={QRcode.svg} />
              <ColorPiker setColor={setColor} />
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Limit Reached Dialog */}
      <Dialog open={showLimitDialog} onOpenChange={() => { }}>
        <DialogContent
          className="sm:max-w-[600px] max-w-[300px] h-[250px] sm:h-[150px] rounded-lg"
          hideCloseButton={true} // Hide the close button for the limit dialog
        >
          <DialogHeader>
            <DialogTitle>Limit Reached</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            You have reached your limit of 5 QR codes. Please come back after 4 hours.
          </DialogDescription>
          <p className="mt-4">
            Time Left to Regenerate QR Code: {formatTimeLeft(timeLeft)}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};
