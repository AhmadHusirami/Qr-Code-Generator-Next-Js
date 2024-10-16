import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import QRCode from "qrcode";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function generateQRCodeImg(
  url: string,
  size: number,
  color: string | undefined = "#000000"
) {
  return await QRCode.toDataURL(url, {
    width: size,
    margin: 2,
    type: "image/png",
    version: 3, // Manually set the version to 3
    maskPattern: 7,
    color: {
      dark: color,
      light: "#ffffff",
    },
  });
}

export async function generateQRCodeSVG(
  url: string,
  size: number,
  color: string | undefined = "#000000"
) {
  return await QRCode.toString(url, {
    width: size,
    margin: 2,
    type: "svg",
    version: 3, // Manually set the version to 3
    maskPattern: 7,
    color: {
      dark: color,
      light: "#ffffff",
    },
  });
}


export function downloadQRCode(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "qrcode.png";
  a.click();
}
