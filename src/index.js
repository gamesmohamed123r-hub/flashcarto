import * as React from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';
import Aboutpage from "./About/Aboutpage";
import Signup from "./Signup/Signup";
import Loginform from "./Signup/Loginform";
import Productpage from "./Product/Productpage";
import Singleproduct from "./Allsingleproduct/Singleproduct";
import { Alldata } from "./Data/Alldata";
import Cartpage from "./Cart/Cartpage";
import { CartProvider } from "react-use-cart";


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
  {
   path:"product",
   element:<Productpage/>
  },
  {
    path:"singleProduct/:id",
    element:<Singleproduct/>
  },
  {
    path:"cart",
    element:<Cartpage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
  <Alldata>
    <RouterProvider router={router} />
  </Alldata>
  </CartProvider>
);
