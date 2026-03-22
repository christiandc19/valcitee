import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductSingle from "../pages/ProductSingle";
import Cart from "../pages/Cart";
import CheckoutRedirect from "../pages/CheckoutRedirect";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product/:slug", element: <ProductSingle /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <CheckoutRedirect /> },
]);