import { RouteObject } from "react-router-dom";
import { Checkout, Home, Products } from "../pages";

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
  {
    path: "/checkout",
    children: [
      {
        element: <Checkout />,
        index: true,
      },
    ],
  },
];

export default routes;
