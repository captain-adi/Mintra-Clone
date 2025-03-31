import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../Components/Carousel";
import Cetogeries from "../Features/Cetogeries";
import Trending from "../Components/Trending";

function Home() {
  const { allItems, loading } = useSelector((state) => state.data);
  console.log("allitems : ", allItems); // ✅ Check if data is stored in Redux
  return (
    <div>
      <Carousel />
      <Cetogeries />
      <Trending/>
    </div>
  );
}

export default Home;
