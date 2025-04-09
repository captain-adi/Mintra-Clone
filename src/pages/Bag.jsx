import React, { useEffect } from "react";
import Bagitems from "../Components/Bag/Bagitems.jsx"
import { useSelector } from "react-redux";

function Bag() {
  const bagItems = useSelector((state) => state.bag);


  return (
    <main>
     <h1>this is a bag </h1>
    </main>
  );
}

export default Bag;