import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import { MainPage } from "../../pages";

export const roater = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/author", element: <div>author</div> },
    ],
  },
]);
