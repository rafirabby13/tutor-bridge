import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
            path: '',
            element: <div>hello</div>
        }
      ]
    },
  ]);