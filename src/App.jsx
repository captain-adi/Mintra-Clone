import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { fetchData } from "./Features/dataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const responseData = await response.json();
      console.log(responseData);
      dispatch(fetchData(responseData)); // ✅ Dispatch after fetching data
    };

    datafetch(); // ✅ Fetch data
  }, [dispatch]);



  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
