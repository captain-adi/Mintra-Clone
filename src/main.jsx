import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import Cloths from "./pages/Cloths.jsx";
import Electronics from "./pages/Electronics.jsx";
import Miscellaneous from "./pages/Miscellaneous.jsx";
import Furniture from "./pages/Furniture.jsx";
import Shoes from "./pages/Shoes.jsx";
import Category from "./pages/Category.jsx";

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
        path : '/clothes',
        element:<Cloths/>
      },
      {
        path: "/electronics",
        element : <Electronics/>
      },{
        path : "/miscellaneous",
        element : <Miscellaneous/>
      }
      ,{
        path : '/furniture',
        element : <Furniture/>
      }
      ,{
        path  : "/shoes",
        element  : <Shoes/>
      },{
        path : "/category/:categoryname",
        element : <Category/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
