import React from "react";
import { RouterProvider } from "react-router";

import { roater } from "./roater";

export default function AppRouter() {
  return <RouterProvider router={roater} />;
}
