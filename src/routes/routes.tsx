import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Game } from "../pages/Game";
import { Homepage } from "../pages/Homepage";
import { Layout } from "../pages/Layout";
import WorkList from "../pages/WorkList";

export const routes = {
  HOME: {
    path: "/",
  },
  GAME: {
    path: "/game",
  },
  WORKS: {
    path: "/works",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.HOME.path,
    element: <Layout />,
    children: [
      {
        path: routes.HOME.path,
        element: <Homepage />,
      },
      {
        path: routes.GAME.path,
        element: <Game />,
      },
      {
        path: routes.WORKS.path,
        element: <WorkList />,
      },
    ],
  },
]);
