import * as React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';
import Aboutpage from "./About/Aboutpage";
import Signup from "./Signup/Signup";
import Loginform from "./Signup/Loginform";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
    {
    path: "about",
    element:<Aboutpage/>,
  },
  {
    path:"signup",
    element:<Signup/>,
  },
  {
    path:"login",
    element:<Loginform/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
