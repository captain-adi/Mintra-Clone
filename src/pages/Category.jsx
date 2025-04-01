import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

function Category() {
  const { categoryname } = useParams();

  const [categoryItems, setCateogryItems] = useState([]);

  useEffect(() => {
    const datafetch = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const responseData = await response.json();
      //   console.log(responseData[0].category.slug )
      const filteredData = responseData.filter(
        (obj) => obj.category.slug === categoryname
      );
      setCateogryItems(filteredData);
    };
    datafetch();
  }, []);

  console.log(categoryItems);

  return (
    <div className="grid grid-cols-6 p-5 gap-6">
      {categoryItems.length > 0 ? (
        categoryItems.map((product) => (

          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h1>No items found</h1>
      )}
    </div>
  );
}

export default Category;
