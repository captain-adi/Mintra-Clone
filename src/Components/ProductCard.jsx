const ProductCard = ({ product }) => {
    return (
      <div className="w-64 border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition duration-300">
        {/* Image Section */}
        <div className="w-full h-48 overflow-hidden rounded-md">
          <img
            src={product?.images?.[0] || "https://via.placeholder.com/200"}
            alt={product?.title || "Product Image"}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Product Details */}
        <div className="flex flex-col flex-grow mt-3">
          <h2 className="text-lg font-semibold line-clamp-1">{product?.title || "No Title"}</h2>
          <p className="text-gray-500 text-sm mt-1">{product?.category?.name || "Unknown Category"}</p>
          <p className="text-green-600 font-bold mt-1">${product?.price?.toFixed(2) || "N/A"}</p>
        </div>
  
        {/* Button */}
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  