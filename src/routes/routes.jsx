import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Category from "../pages/Category.jsx";
import DetailAboutProduct from "../pages/DetailAboutProduct.jsx";
import Bag from "../pages/Bag.jsx";
import WishList from "../pages/WishList.jsx";
import Login from "../pages/Login/Login.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Address from "../pages/Address.jsx";
import Payment from "../pages/Payment.jsx";

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
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/address",
    element: <Address />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

export default router;
