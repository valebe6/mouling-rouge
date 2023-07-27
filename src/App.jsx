import Login from "./components/layouts/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Lugares2 from "./components/layouts/Lugares";
import Administrador from "./components/layouts/Admin/Administrador";


const router=createBrowserRouter([{
  path: '/',
  element:<Login/>
},
{
  path:'/lugares',
  element:<Lugares2/>
},
{
  path:'/admin',
  element:<Administrador/>
},
{
  path:'/Cerrar',
  element:<Login/>
},

])


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
