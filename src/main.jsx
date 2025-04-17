import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import Category from "./pages/Category.jsx";
import DetailAboutProduct from "./pages/DetailAboutProduct.jsx";
import Bag from "./pages/Bag.jsx";
import WishList from "./pages/WishList.jsx";
import Address from "./pages/Address.jsx";
import Payment from "./pages/Payment.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/category/:categoryname",
        element: <Category />,
      },
      {
        path: "/category/:categoryname/:id",
        element: <DetailAboutProduct />,
      },
      {
        path : "/bag",
        element : <Bag/>
      },{
        path : "/wishlist",
        element : <WishList/>
      }
    ],
    
  },
  {
    path : '/address',
    element : <Address/>
  },
{
  path :"/payment",
  element : <Payment/>
}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
