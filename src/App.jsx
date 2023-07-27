import React from "react";
import Login from "./components/layouts/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lugares2 from "./components/layouts/Lugares";
import Administrador from "./components/layouts/Admin/Administrador";
import VistaCliente from "./components/layouts/VistaCliente";
import Home from "./components/layouts/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/lugares",
    element: <Lugares2 />,
  },
  {
    path: "/admin",
    element: <Administrador />,
  },
  {
    path: "/vista-cliente",
    element: <VistaCliente />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
