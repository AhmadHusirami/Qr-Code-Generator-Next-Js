import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { projects } from "./links";
import Link from "next/link";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="block md:hidden p-0">
          <Icons.menu className="size-7" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-start text-xl">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-3 mt-4">
          {projects.map((project) => (
            <Link
              href={project.href}
              key={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-lg"
            >
              {project.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
