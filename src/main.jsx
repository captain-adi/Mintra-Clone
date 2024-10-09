import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Bag from './Components/Bag/Bag.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home.jsx'


const router = createBrowserRouter([
{
  path:"",
  element:<App/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:'bag',
      element: <Bag/>
    }
  ]
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)