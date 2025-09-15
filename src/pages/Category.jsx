import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { useDispatch } from "react-redux";
import { setProduct } from "../Features/cetogerySlice";
import ProductCardSkeleton from "../Components/ProductCardSkeleton";
import axios from "../api/apiConfige";

function Category() {
  const dispatch = useDispatch();
  const { categoryname } = useParams();

  const [categoryItems, setCateogryItems] = useState([]);

  useEffect(() => {
    const datafetch = async () => {
      try {
        const apiResponse = await axios("/product");
        const responseData = apiResponse.data.data;
        const filteredData = responseData.filter(
          (obj) => obj.category === categoryname
        );
        setCateogryItems(filteredData);
        dispatch(setProduct(filteredData));
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    datafetch();
  }, []);

  return (
    <div className="flex  container mx-auto flex-wrap  gap-8 mt-10">
      {categoryItems.length > 0
        ? categoryItems.map((product) => (
            <Link to={`/category/${product.category}/${product._id}`}>
              <ProductCard key={product.id} product={product} />
            </Link>
          ))
        : [...Array(6)].map((_, index) => <ProductCardSkeleton />)}
    </div>
  );
}

export default Category;
