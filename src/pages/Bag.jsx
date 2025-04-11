import React, { useEffect } from "react";
import Bagitems from "../Components/Bag/Bagitems.jsx"
import { useSelector } from "react-redux";
import { CookingPot } from "lucide-react";

function Bag() {
  const {bagItems} = useSelector((state)=>state.bag)
    console.log(bagItems)

  return (
    <main>
     <Bagitems bagItems={bagItems} />
    </main>
  );
}

export default Bag;