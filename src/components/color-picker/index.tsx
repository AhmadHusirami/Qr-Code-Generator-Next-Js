import { HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { BlendingModeIcon, ColorWheelIcon } from "@radix-ui/react-icons";

type ColorPikerProps = {
  setColor: (color: string) => void;
};

export const ColorPiker = ({ setColor }: ColorPikerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">
          <BlendingModeIcon className="size-[18px]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <HexColorPicker onChange={setColor} />
      </PopoverContent>
    </Popover>
  );
};
