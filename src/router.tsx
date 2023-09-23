import React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import blogRouters from "./blog/router";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./layout";
import Individual from "./pages/Individual";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "individual",
        element: <Individual />,
      },
    ],
  },
  {
    path: "",
    element: <>404 Not Found!</>,
  },
  ...blogRouters,
];

export default routes;
