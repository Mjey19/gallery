import React from "react";
import { HeaderNav } from "../../entities";
export function Header() {
  return (
    <header className="w-full h-24 flex justify-center z-10">
      <HeaderNav />
    </header>
  );
}
