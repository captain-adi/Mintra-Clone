import React, { useEffect } from "react";
import Bagitems from "../Components/Bag/Bagitems.jsx";
import { useSelector } from "react-redux";
import { CookingPot } from "lucide-react";
import BagDetails from "../Components/Bag/BagDetails.jsx";

function Bag() {
  const { bagItems } = useSelector((state) => state.bag);
  console.log(bagItems);

  return (
    <main className="grid grid-cols-2 p-10">
      <Bagitems bagItems={bagItems} />
      <BagDetails />
    </main>
  );
}

export default Bag;
