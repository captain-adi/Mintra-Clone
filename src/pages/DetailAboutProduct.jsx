import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Star } from 'lucide-react';
import DetailsProductSkeleton from '../Components/DetailsProductSkeleton';

const DetailAboutProduct = () => {
  const notify = () => toast("Added to Cart");
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("https://e-com-api-vru7.onrender.com/api/product");
      const responseData = await response.json();
      const filteredData = responseData.filter((obj) => obj._id === id);
      setProduct(filteredData[0]);
    };
    datafetch();
  }, [id]);

  if (!product) {
    return <DetailsProductSkeleton/>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ToastContainer />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-2xl shadow-md flex items-center justify-center p-4 border">
            <img
              src={product?.images}
              alt={product?.title}
              className="max-h-full max-w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{product?.title}</h1>
            <p className="text-gray-500 text-sm mt-1">
              Category: <span className="font-medium text-gray-700">{product?.category?.name}</span>
            </p>
          </div>

          {/* Rating */}
          {product?.rating && (
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {[...Array(Math.round(product.rating))].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
              <span className="text-gray-600 ml-2">({product.rating.toFixed(1)})</span>
            </div>
          )}

          {/* Price */}
          <p className="text-3xl font-bold text-red-600">${product?.price?.toFixed(2)}</p>

          {/* Cart Button */}
          <button
            onClick={notify}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Description</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{product?.description}</p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <p><strong>Warranty:</strong> {product?.warrantyInformation || "1 Year"}</p>
            <p><strong>Shipping:</strong> {product?.shippingInformation || "Standard"}</p>
            <p><strong>Return Policy:</strong> {product?.returnPolicy || "30 Days"}</p>
            <p><strong>Availability:</strong> {product?.availabilityStatus || "Available"}</p>
          </div>

          {/* 👇 Product Info Block (placed above Tags) */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
            <p><strong>SKU:</strong> {product?.sku || "N/A"}</p>
            <p><strong>Stock:</strong> {product?.stock || "In Stock"}</p>
            <p><strong>Brand:</strong> {product?.brand || "Premium Brand"}</p>
            <p><strong>Weight:</strong> {product?.weight ? `${product.weight} kg` : "N/A"}</p>
          </div>

          {/* Tags */}
          {product?.tags?.length > 0 && (
            <div>
              <h4 className="font-semibold text-sm text-gray-800 mt-4 mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Review Section (untouched as per your request) */}
      {product?.reviews?.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h3>
          <div className="space-y-6">
            {product.reviews.map((review, i) => (
              <div key={i} className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                  {review.reviewerName?.[0]?.toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-800 font-medium">{review.reviewerName}</p>
                    <span className="text-yellow-600 text-sm font-semibold">⭐ {review.rating}/5</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{review.comment}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailAboutProduct;
