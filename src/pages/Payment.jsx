import React, { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import {
  FaUniversity,
  FaWallet,
  FaCreditCard,
  FaGooglePay,
} from "react-icons/fa";

const paymentOptions = [
  {
    label: "Cash On Delivery (Cash/UPI)",
    icon: <BsCashCoin />,
    options: ["Cash on Delivery (Cash/UPI)"],
  },
  {
    label: "UPI (Pay via any App)",
    icon: <FaGooglePay />,
    options: ["Google Pay", "PhonePe", "Paytm"],
  },
  {
    label: "Credit/Debit Card",
    icon: <FaCreditCard />,
    options: ["Visa", "MasterCard", "RuPay"],
  },
  {
    label: "Wallets",
    icon: <FaWallet />,
    options: ["Paytm Wallet", "Mobikwik", "PhonePe Wallet"],
  },
  {
    label: "Net Banking",
    icon: <FaUniversity />,
    options: ["SBI", "HDFC", "ICICI"],
  },
];

const Payment = () => {
  const [selectedMode, setSelectedMode] = useState("Cash On Delivery (Cash/UPI)");

  // Now selectedMode is initialized, so you can safely find the selected payment option
  const selected = paymentOptions.find((item) => item.label === selectedMode);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Bank Offer */}
      <div className="max-w-6xl mx-auto bg-white p-4 rounded shadow mb-6">
        <h2 className="text-sm font-semibold mb-2 flex items-center gap-2">
          <span>⚙️ Bank Offer</span>
        </h2>
        <p className="text-gray-700 text-sm">
          10% Instant Discount on BOB Credit Card and Credit Card EMI on a min
          spend of ₹3,500. TCA
        </p>
        <button className="text-pink-600 text-sm mt-2 underline">
          Show More
        </button>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Payment Mode */}
        <div className="col-span-2 bg-white rounded shadow">
          <div className="border-b p-4 font-semibold">Choose Payment Mode</div>
          <div className="flex">
            {/* Left: Payment Mode List */}
            <div className="w-1/3 border-r">
              {paymentOptions.map((mode) => (
                <div
                  key={mode.label}
                  onClick={() => setSelectedMode(mode.label)}
                  className={`cursor-pointer p-4 text-sm border-b hover:bg-gray-100 transition ${
                    selectedMode === mode.label
                      ? "bg-pink-50 font-semibold border-l-4 border-pink-500"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {mode.icon}
                    <span>{mode.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Recommended Options */}
            <div className="w-2/3 p-5">
              <h3 className="text-sm font-semibold mb-3 text-gray-700">
                Recommended Payment Options
              </h3>
              <div className="space-y-3">
                {selected?.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 text-sm"
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      className="accent-pink-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold text-gray-800 mb-4">
            PRICE DETAILS (1 Item)
          </h3>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Total MRP</span>
              <span>₹8,399</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount on MRP</span>
              <span>-₹6,888</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹20</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-green-600">FREE</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>₹1,531</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Card */}
      <div className="max-w-6xl mx-auto mt-6 bg-white p-4 rounded shadow flex justify-between items-center">
        <span className="text-sm font-medium">🎁 Have a Gift Card?</span>
        <button className="text-pink-600 text-sm font-semibold">
          APPLY GIFT CARD
        </button>
      </div>
    </div>
  );
};

export default Payment;
