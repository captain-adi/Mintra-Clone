import React from "react";

function ProductCardSkeleton() {
  return (
    <>
      <div class="w-64 h-fit border rounded-lg bg-white p-4">
        <div class="w-full h-48 overflow-hidden rounded-md bg-gray-200 animate-pulse"></div>
        <div class="flex flex-col flex-grow mt-3">
          <div class="h-6 bg-gray-200 rounded-md animate-pulse w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded-md animate-pulse w-1/2 mt-1"></div>
          <div class="flex items-center gap-2 mt-2">
            <div class="h-6 bg-gray-200 rounded-md animate-pulse w-1/4"></div>
            <div class="h-4 bg-gray-200 rounded-md animate-pulse w-1/4 line-through"></div>
            <div class="h-4 bg-gray-200 rounded-md animate-pulse w-1/4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCardSkeleton;
