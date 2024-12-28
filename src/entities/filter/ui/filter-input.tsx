import { Input } from "@/shared/ui/input";
import React from "react";

export function FilterInput() {
  return (
    <div>
      <Input
        className="w-96 h-14 bg-darkgreen focus:outline-lightgreen"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  );
}
