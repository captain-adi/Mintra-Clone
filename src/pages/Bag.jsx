import React, { useEffect } from "react";
import Bagitems from "../Components/Bag/Bagitems.jsx";
import { useSelector } from "react-redux";
import { CookingPot } from "lucide-react";
import BagDetails from "../Components/Bag/BagDetails.jsx";

function Bag() {
  const { bagItems } = useSelector((state) => state.bag);
  console.log(bagItems);

  return (
    <>
      {bagItems.length !== 0 ? (
        <main className="flex gap-2  h-[42vw] w-[50vw] m-auto items-center justify-center ">
          <div className="w-full">
            <Bagitems bagItems={bagItems} />
          </div>
          <BagDetails />
        </main>
      ) : (
        <div className="flex flex-col items-center justify-center h-[65vh] bg-white p-6">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" // 🔁 Replace with your actual image path
            alt="Empty Bag"
            className="w-28 h-28 mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Hey, it feels so light!
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            There is nothing in your bag. Let’s add some items.
          </p>
          <button className="px-4 py-2 border border-pink-500 text-pink-600 font-semibold text-sm rounded-sm hover:bg-pink-50 transition">
            ADD ITEMS FROM WISHLIST
          </button>
        </div>
      )}
    </>
  );
}

export default Bag;
