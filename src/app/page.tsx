"use client";
import { SelectSize } from "@/components/select-size";
import { ShowQRcode } from "@/components/show-qrcode";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGenerateQRCode } from "@/lib/hooks";
import React from "react";

export default function Home() {
  const { url, setUrl, size, setSize, setColor, qrCode, generateQRCode } =
    useGenerateQRCode();

  const disableButton = url === "" || size === "";
  return (
    <main className="flex  flex-col items-center  md:justify-between justify-center md:container md:mt-24 mt-8">
      <Card className="w-full max-w-sm mx-auto border-[0px] md:border ">
        <CardHeader>
          <CardTitle className="text-2xl">QR Code Generator</CardTitle>
          <CardDescription>
            Generate QR Codes effortlessly with our intuitive interface.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="url">url</Label>
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
            <Label>size</Label>
            <SelectSize setSize={setSize} />
          </div>
        </CardContent>
        <CardFooter>
          <ShowQRcode
            QRcode={qrCode}
            generateQRCode={generateQRCode}
            disableButton={disableButton}
            setColor={setColor}
          />
        </CardFooter>
      </Card>
    </main>
  );
}
