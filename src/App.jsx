import Login from "./components/layouts/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lugares2 from "./components/layouts/Lugares";
import Administrador from "./components/layouts/Admin/Administrador";
import VistaCliente from "./components/layouts/VistaCliente";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
