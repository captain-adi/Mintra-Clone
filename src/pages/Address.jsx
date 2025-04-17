import React from "react";
import { Link } from "react-router-dom";

function Address() {
  return (
    <div className="flex w-1/2 m-auto  justify-center items-center ">
        <div class="max-w-xl mx-auto p-4 space-y-4 text-sm">
  {/* <!-- Title --> */}
  <div>
    <h2 class="font-semibold text-gray-800 text-lg">Select Delivery Address</h2>
    <p class="text-xs text-gray-500 mt-1 uppercase">Default Address</p>
  </div>

  {/* <!-- Address Card --> */}
  <div class="border border-gray-200 rounded-lg p-4 shadow-sm">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="w-4 h-4 border-2 border-pink-600 rounded-full flex items-center justify-center">
          <span class="w-2 h-2 bg-pink-600 rounded-full"></span>
        </span>
        <h3 class="font-semibold text-gray-800">Aditya Pandey</h3>
        <span class="text-xs text-green-700 border border-green-700 rounded px-2 py-0.5">HOME</span>
      </div>
    </div>

    <p class="text-gray-700 mt-2 leading-relaxed">
      sipat chowk , sarda mandir , near pinky provision, Bilaspur (Bilaspur-CGH) H.O<br />
      Bilaspur, Chhattisgarh - 495001
    </p>

    <p class="mt-2 text-gray-700">
      <span class="font-medium">Mobile:</span> <span class="font-semibold">9717977959</span>
    </p>

    <p class="text-gray-700 mt-1">• Pay on Delivery available</p>

    {/* <!-- Buttons --> */}
    <div class="flex gap-3 mt-4">
      <button class="border border-gray-500 px-4 py-1 rounded text-sm font-medium hover:bg-gray-100">REMOVE</button>
      <button class="border border-gray-500 px-4 py-1 rounded text-sm font-medium hover:bg-gray-100">EDIT</button>
    </div>
  </div>

  {/* <!-- Add New Address (dashed box) --> */}
  <div class="border border-dashed border-pink-600 p-4 text-pink-600 font-medium rounded text-center cursor-pointer hover:bg-pink-50">
    + Add New Address
  </div>
</div>

      <div class="max-w-md mx-auto p-4 border border-gray-200 rounded-lg shadow-sm text-sm space-y-4">
        {/* <!-- DELIVERY ESTIMATES --> */}
        <div>
          <h2 class="font-semibold text-gray-700 uppercase text-xs mb-2">
            Delivery Estimates
          </h2>
          <div class="flex gap-3 items-start">
            <img
              src="https://via.placeholder.com/50"
              alt="Product"
              class="w-12 h-12 rounded"
            />
            <div>
              <p class="text-gray-600">
                Estimated delivery by{" "}
                <span class="font-semibold text-black">22 Apr 2025</span>
              </p>
              <p class="text-green-600 flex items-center gap-1 mt-1">
                <svg
                  class="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Open Box Verification included
              </p>
            </div>
          </div>
        </div>

        {/* <!-- PRICE DETAILS --> */}
        <div class="border-t border-gray-200 pt-4">
          <h2 class="font-semibold text-gray-700 uppercase text-xs mb-2">
            Price Details (1 Item)
          </h2>
          <div class="space-y-1">
            <div class="flex justify-between">
              <span>Total MRP</span>
              <span>₹8,399</span>
            </div>
            <div class="flex justify-between text-pink-600">
              <span>Discount on MRP</span>
              <span>- ₹6,888</span>
            </div>
            <div class="flex justify-between">
              <span class="flex items-center gap-1">
                Platform Fee
                <span class="text-pink-600 cursor-pointer">Know More</span>
              </span>
              <span>₹20</span>
            </div>
            <div class="flex justify-between">
              <span class="flex items-center gap-1">
                Shipping Fee
                <span class="text-pink-600 cursor-pointer">Know More</span>
              </span>
              <span class="text-green-600">FREE</span>
            </div>
            <p class="text-xs text-gray-400">Free shipping for you</p>
          </div>
        </div>

        {/* <!-- TOTAL AMOUNT --> */}
        <div class="border-t border-gray-200 pt-4">
          <div class="flex justify-between font-semibold text-black text-base">
            <span>Total Amount</span>
            <span>₹1,531</span>
          </div>
        </div>

        {/* <!-- OFFER INFO --> */}
        <div class="border border-green-500 bg-green-50 text-green-700 rounded p-3 flex items-start gap-2">
          <svg
            class="w-5 h-5 mt-1"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            Includes{" "}
            <span class="font-semibold">FREE open box verification</span> for 1
            item!
          </p>
        </div>

        {/* <!-- CONTINUE BUTTON --> */}
        <Link to={"/payment"}>
        <button class="w-full bg-pink-600 text-white py-2 rounded font-semibold">
          CONTINUE
        </button>
        </Link>

        <p class="text-center text-sm text-gray-500 mt-2">
          Need Help ? <span class="underline cursor-pointer">Contact Us</span>
        </p>
      </div>
    </div>
  );
}

export default Address;
