import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Admin from "../Admin/Admin";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Admin/NewsLayout";
import News from "../pages/News/News/News";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Admin/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/category/:id",
          element: <Category/>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)

        }
      ]
    },
    {
      path: "news",
      element: <NewsLayout/>,
      children: [
        {
          path: ":id",
          element: <News/>
        }
      ]
    }



  ]);

  export default router;