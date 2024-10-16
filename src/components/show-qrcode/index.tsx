import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { downloadQRCode } from "@/lib/utils";
import { toast } from "sonner";
import { CopyClipboard } from "../copy-clipboard";
import { ColorPiker } from "../color-picker";

type ShowQRcodeProps = {
  QRcode: {
    img: string;
    svg: string;
  };
  generateQRCode: () => void;
  disableButton?: boolean;
  setColor: (color: string) => void;
};

export const ShowQRcode = ({
  QRcode,
  generateQRCode,
  disableButton,
  setColor,
}: ShowQRcodeProps) => {
  const handleDownloadCode = () => {
    downloadQRCode(QRcode.img);
    toast("QR Code downloaded successfully");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full"
          onClick={generateQRCode}
          disabled={disableButton}
        >
          Generate QR Code{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[320px] rounded-lg">
        <DialogHeader>
          <DialogTitle>QR Code Generator</DialogTitle>
          <DialogDescription>
            QR Codes allow smartphone users to access your website simply and
            quickly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img src={QRcode.img} alt="QR code" className="mx-auto rounded-md" />
        </div>
        <DialogFooter className="flex-row justify-end gap-2">
          <Button type="submit" onClick={handleDownloadCode}>
            Download QR Code
          </Button>
          <CopyClipboard text={QRcode.svg} />
          <ColorPiker setColor={setColor} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
