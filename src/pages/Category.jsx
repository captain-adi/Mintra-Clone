import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../Features/cetogerySlice";

function Category() {
  const dispatch = useDispatch();
  const { categoryname } = useParams();

  const [categoryItems, setCateogryItems] = useState([]);

  useEffect(() => {
    const datafetch = async () => {
      console.log("clicked")
      const response = await fetch("https://e-com-api-vru7.onrender.com/api/product");
      const responseData = await response.json();
      console.log(responseData)
      const filteredData = responseData.filter(
        (obj) => obj.category === categoryname
      );
      setCateogryItems(filteredData);
      dispatch(setProduct(filteredData));
    };
    datafetch();
  }, []);

  return (
    <div className="grid grid-cols-6 p-5 h-[80vh] gap-6">
      {categoryItems.length > 0 ? (
        categoryItems.map((product) => (
          <Link to={`/category/${product.category}/${product._id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))
      ) : (
        <h1>No items found</h1>
      )}
    </div>
  );
}

export default Category;
