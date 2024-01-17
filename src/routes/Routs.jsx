import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Admin from "../Admin/Admin";
import Home from "../pages/Home/Home/Home";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Admin/>,
      children: [
        {
            path: "/",
            element: <Home/>
        }
      ]
    },
  ]);

  export default router;