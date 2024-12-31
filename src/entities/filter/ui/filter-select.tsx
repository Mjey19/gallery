import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { SelectTypes } from "@/shared/types/select.types";
export function FilterSelect({ ...props }: SelectTypes) {
  const { optionArr, placeholder } = props;
  const [selectedValue, setSelectedValue] = useState("");
  
  return (
    <Select value={selectedValue} onValueChange={setSelectedValue}>
      <SelectTrigger className="w-60 h-12 text-white placeholder:opacity-75 bg-lightgreen focus:outline-lightgreen active:ring-lightgreen border focus:border-lightgreen focus:ring-lightgreen ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className=" bg-darkgreen font-[18px] border border-lightgreen focus:outline-lightgreen ">
        {optionArr.map((item, index) => (
          <SelectItem
            key={index}
            className="h-9 bg-lightgreen text-white rounded-sm hover:scale-105 transition-transform"
            value={item}
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
