import React, { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import {
  FaUniversity,
  FaWallet,
  FaCreditCard,
  FaGooglePay,
} from "react-icons/fa";
import { useSelector } from "react-redux";

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
  const { priceDetails } = useSelector((state) => state.bag);
  const [selectedMode, setSelectedMode] = useState(
    "Cash On Delivery (Cash/UPI)"
  );

  // Now selectedMode is initialized, now i  can safely find the selected payment option
  const selected = paymentOptions.find((item) => item.label === selectedMode);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-5 shadow-md bg-white flex-wrap">
        {/* Logo */}
        <div className="mb-2 md:mb-0">
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
            alt="Myntra Logo"
            className="h-4 md:h-8"
          />
        </div>

        {/* Steps */}
        <div className="flex items-center space-x-2 text-xs tracking-wide font-semibold text-gray-600 mb-2 md:mb-0">
          <span>BAG</span>
          <span>---------</span>
          <span className="">ADDRESS</span>
          <span>---------</span>
          <span className="text-teal-500 border-b-2 border-teal-500">
            PAYMENT
          </span>
        </div>

        {/* Secure Icon */}
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-teal-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c0 .552-.224 1.052-.586 1.414A1.994 1.994 0 0110 13c-.552 0-1.052-.224-1.414-.586A1.994 1.994 0 018 11c0-.552.224-1.052.586-1.414A1.994 1.994 0 0110 9c.552 0 1.052.224 1.414.586A1.994 1.994 0 0112 11zM5 11a7 7 0 1114 0c0 5.25-3.5 9.75-7 12-3.5-2.25-7-6.75-7-12z"
            />
          </svg>
          <span>100% SECURE</span>
        </div>
      </div>
      <div className="h-[calc(100vh-72px)] bg-gray-100 p-6">
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
            <div className="border-b p-4 font-semibold">
              Choose Payment Mode
            </div>
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
                <span>₹{priceDetails.totalMRP}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount on MRP</span>
                <span>-₹{priceDetails.totalDiscount}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹{priceDetails.platFormFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-green-600">
                  {priceDetails.shippingFee}
                </span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Total Amount</span>
                <span>₹{priceDetails.finalMRP}</span>
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
    </>
  );
};

export default Payment;
