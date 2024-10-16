import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sizes = [
  { value: 200, label: "Small" },
  { value: 300, label: "Medium" },
  { value: 400, label: "Large" },
];

type SelectSizeProps = {
  setSize: (size: string) => void;
};
export function SelectSize({ setSize }: SelectSizeProps) {
  return (
    <Select onValueChange={setSize}>
      <SelectTrigger>
        <SelectValue placeholder="Select size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Size</SelectLabel>
          {sizes.map((size) => (
            <SelectItem key={size.value} value={size.value.toString()}>
              {size.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
