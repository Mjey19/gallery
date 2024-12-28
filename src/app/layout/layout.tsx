import React from "react";
import { Outlet } from "react-router";
import { Header } from "../../widgets";

export default function Layout() {
  return (
    <div className="wrapper">
      <div className="mx-[5%]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
