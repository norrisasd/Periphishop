import { RouteObject } from "react-router-dom";
import { Home, Products } from "../pages";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
  {
    path: "/products",
    children: [
      {
        element: <Products />,
        index: true,
      },
    ],
  },
];

export default routes;
