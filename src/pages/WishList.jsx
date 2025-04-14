import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItems } from "../Features/wishlistSlice";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { addBagitems } from "../Features/BagSlice";

function WishList() {
  const addToCart = () => { toast.success("ADDED TO CART")};
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const handleRemove = (item) => {
    dispatch(removeWishlistItems(item));
  };

  const handleMoveToBag = (item) => {
    addToCart();
    dispatch(addBagitems(item));
    dispatch(removeWishlistItems(item));
  };

  return (
    <div className="w-[90vw] mx-auto grid gap-4 mb-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6">
        <ToastContainer autoClose={3000} />
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
        wishlistItems.map((item) => {
          return (
            <div
              key={item.id}
              className="border rounded-lg shadow-md overflow-hidden bg-white flex flex-col hover:shadow-lg transition duration-300"
            >
            
              {/* Image Section */}
              <div className="relative aspect-[4/3] bg-gray-50">
                <img
                  src={item.images}
                  alt={item.title}
                  onError={(e) => (e.target.src = "/placeholder.png")}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => handleRemove(item)}
                  className="absolute top-2 right-2 bg-gray-200 hover:bg-red-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
                >
                  ×
                </button>
              </div>

              {/* Info Section */}
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

              {/* Move to Bag Button */}
              <button
                onClick={() => handleMoveToBag(item)}
                className="w-full mt-auto border-t text-sm text-pink-600 font-bold py-3 hover:bg-pink-50 transition"
              >
                MOVE TO BAG
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default WishList;
