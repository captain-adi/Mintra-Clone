import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { fetchData } from "./Features/dataSlice";
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const responseData = await response.json();
      dispatch(fetchData(responseData)); // ✅ Dispatch after fetching data
    };
     
    datafetch(); // ✅ Fetch data
  }, [dispatch]);



  return (
    <div>
       <ToastContainer />
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
