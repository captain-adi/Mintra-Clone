import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItems } from "../Features/wishlistSlice";
import { addBagitems } from "../Features/BagSlice";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function WishList() {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const handleMoveToBag = (item) => {
    toast.success("Added to Cart");
    dispatch(addBagitems(item));
    dispatch(removeWishlistItems(item));
  };

  return (
    <div className="w-full h-[70vh] max-w-[1200px] px-4 mx-auto mt-6">
      <ToastContainer autoClose={2000} />
      {wishlistItems.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <Heart className="w-16 h-16 text-pink-500 mb-4" strokeWidth={1.5} />
        <h2 className="text-2xl font-semibold mb-2">
          Your Wishlist is Empty
        </h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <Link
          to="/"
          className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition"
        >
          Start Shopping
        </Link>
      </div>
      ) : (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg bg-white shadow-sm flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <div className="w-full h-48 overflow-hidden rounded-md">
                  <img
                    src={item?.images?.[0] || "https://via.placeholder.com/200"}
                    alt={item?.title || "Product Image"}
                    className="w-full h-full object-contain "
                  />
                </div>
                <button
                  onClick={() => dispatch(removeWishlistItems(item))}
                  className="absolute top-2 right-2 text-gray-600 bg-white border rounded-full w-6 h-6 text-sm"
                >
                  ×
                </button>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h2 className="text-sm text-gray-700 truncate">{item.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-bold text-blue-900">
                    Rs.{item.price}
                  </span>
                  <span className="text-xs line-through text-gray-500">
                    Rs.2222
                  </span>
                  <span className="text-xs text-orange-500 font-semibold">
                    20% off
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleMoveToBag(item)}
                className="w-full mt-auto border-t text-sm text-pink-600 font-bold py-3 hover:bg-pink-50 transition"
              >
                Move to Bag
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishList;
