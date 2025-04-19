import React from "react";
import Bagitems from "../Components/Bag/Bagitems.jsx";
import { useSelector } from "react-redux";
import BagDetails from "../Components/Bag/BagDetails.jsx";
import { Link } from "react-router-dom";

function Bag() {
  const { bagItems } = useSelector((state) => state.bag);

  return (
    <>
      {bagItems.length !== 0 ? (
        <main className="flex flex-col lg:flex-row gap-4 w-full max-w-6xl mx-auto p-4">
          <div className="w-full lg:w-2/3">
            <Bagitems bagItems={bagItems} />
          </div>
          <div className="w-full lg:w-1/3">
            <BagDetails />
          </div>
        </main>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center p-4">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
            alt="Empty Bag"
            className="w-24 h-24 md:w-28 md:h-28 mb-4"
          />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
            Hey, it feels so light!
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            There is nothing in your bag. Let’s add some items.
          </p>
          <Link to={"/wishlist"}>
            <button className="px-4 py-2 border border-pink-500 text-pink-600 font-medium text-sm rounded hover:bg-pink-50 transition">
              ADD ITEMS FROM WISHLIST
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Bag;
