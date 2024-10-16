import React from "react";
import { Logo } from "../ui/logo";
import Link from "next/link";
import { Icons } from "../ui/icons";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "../ui/separator";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <div className="container py-4 max-w-screen-xl px-4 md:px-8">
      <div className="flex items-center justify-between gap-6">
        <Logo />
        <MainNav />
        <div className="flex items-center gap-2">
        <Link
            href="https://www.linkedin.com/in/ahmad-husirami-ab438b272/"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.linkedIn className="size-7 md:size-8 fill-current" />
          </Link>
          <Link
            href="https://github.com/AhmadHusirami"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.gitHub className="size-7 md:size-8 fill-current" />
          </Link>
          <Link
            href="https://wa.me/96171793152"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.Whatsapp className="size-10 md:size-8 fill-current" />
          </Link>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
      <Separator className="my-3 hidden md:block" />
    </div>
  );
};
