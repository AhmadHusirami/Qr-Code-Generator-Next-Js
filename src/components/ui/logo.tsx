import React from "react";
import { Icons } from "./icons";

export const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Icons.logo className="md:size-9 size-8 fill-primary" />
      <span className="md:text-xl text-lg font-semibold text-primary">
        QRcode
      </span>
    </div>
  );
};
