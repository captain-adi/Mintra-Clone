import React from "react";
import { useSelector } from "react-redux";

function BagDetails() {
  const { bagItems } = useSelector((state) => state.bag);
  let totalMRP = 0;
  let totalDiscount = 0;
  const Convenience_Fee = bagItems.length > 0 ? 50 : 0;
  bagItems.map((items) => {
    totalMRP += items.price;
    // totalDiscount += items.original_price - items.current_price;
  });
  // let finalMRP = totalMRP + Convenience_Fee;

  return (
    <div className="border p-4 rounded-md shadow-sm bg-white w-full max-w-md">
    {/* Coupons */}
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2 font-medium text-gray-700">
        <span>🏷️</span>
        Apply Coupons
      </div>
      <button className="text-pink-500 border border-pink-500 px-3 py-1 rounded-sm text-sm font-semibold hover:bg-pink-50">
        APPLY
      </button>
    </div>
  
    <hr className="my-2" />
  
    {/* Donation Section */}
    <div className="mb-4">
      <label className="flex items-center space-x-2 mb-2 font-medium text-gray-700">
        <input type="checkbox" className="accent-pink-500" />
        <span>Donate and make a difference</span>
      </label>
      <div className="flex gap-2 mb-1">
        {["₹10", "₹20", "₹50", "₹100"].map((amt) => (
          <button
            key={amt}
            className="border px-3 py-1 rounded-full text-sm hover:bg-gray-100"
          >
            {amt}
          </button>
        ))}
      </div>
      <button className="text-pink-600 text-sm font-semibold hover:underline">
        Know More
      </button>
    </div>
  
    <hr className="my-2" />
  
    {/* Price Details */}
    <div>
      <h3 className="text-sm font-bold text-gray-800 mb-3">PRICE DETAILS (1 Item)</h3>
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Total MRP</span>
        <span>₹{totalMRP}</span>
      </div>
      <div className="flex justify-between text-sm text-green-600 mb-1">
        <span>Discount on MRP</span>
        <span>- ₹6,888</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Coupon Discount</span>
        <button className="text-pink-500 font-medium hover:underline text-sm">
          Apply Coupon
        </button>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>
          Platform Fee{" "}
          <button className="text-pink-500 text-xs hover:underline">Know More</button>
        </span>
        <span>₹20</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>
          Shipping Fee{" "}
          <button className="text-pink-500 text-xs hover:underline">Know More</button>
        </span>
        <span className="text-green-500">FREE</span>
      </div>
    </div>
  
    <hr className="my-3" />
  
    {/* Total */}
    <div className="flex justify-between items-center font-semibold text-gray-800 text-lg mb-2">
      <span>Total Amount</span>
      <span>₹1,531</span>
    </div>
  
    {/* Free verification */}
    <div className="text-sm text-gray-600 flex items-center gap-2 mb-4">
      <span>✅</span>
      <span>Includes FREE open box verification</span>
    </div>
  
    {/* Place Order Button */}
    <button className="w-full bg-pink-500 text-white font-bold py-2 rounded-sm hover:bg-pink-600 transition">
      PLACE ORDER
    </button>
  </div>
  
  );
}

export default BagDetails;
