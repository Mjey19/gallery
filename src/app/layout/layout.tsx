import React from "react";
import { Outlet } from "react-router";
import { Header } from "../../widgets";

export default function Layout() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
