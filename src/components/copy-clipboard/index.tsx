"use client";

import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export const CopyClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
    toast.success("Copied to clipboard");
  };
  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <Button variant="secondary">
        {copied ? (
          <Icons.check className="w-4 h-4 " />
        ) : (
          <Icons.copy className="w-4 h-4 " />
        )}
      </Button>
    </CopyToClipboard>
  );
};
