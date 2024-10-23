import React, { useEffect } from "react";
import Bagitems from "./Bagitems";
import BagDetails from "./BagDetails";
import { useSelector } from "react-redux";

function Bag() {
  const bagItems = useSelector((state) => state.bag);


  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container ">
          {bagItems.length == 0 ? (
            <h1 className="font-light text-2xl text-center ">bag is empty</h1>
          ) : (
            bagItems.map((item,index) => (
              <Bagitems key={index} index={index} item={item} bagItems={bagItems} />
            ))
          )}
        </div>
        <BagDetails />
      </div>
    </main>
  );
}

export default Bag;
