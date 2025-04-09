import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../Components/Carousel";
import Cetogeries from "../Components/Cetogeries";
import Trending from "../Components/Trending";

function Home() {
  

  return (
    <div>
      <Carousel />
      <Cetogeries />
      <Trending/>
    </div>
  );
}

export default Home;
