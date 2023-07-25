import Login from "./components/layouts/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Lugares2 from "./components/layouts/Lugares";

const router=createBrowserRouter([{
  path: '/',
  element:<Login/>
},
{
  path:'/lugares',
  element:<Lugares2/>
}])


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
