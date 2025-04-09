import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../Features/cetogerySlice";
import { Link } from "react-router-dom";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        'https://api.escuelajs.co/api/v1/categories'
      );
      const data = await response.json();
      dispatch(setCategories(data)); // Dispatch action with fetched data
    };
    fetchCategory(); // Fixed incorrect function call
  }, [dispatch]);

  const { categories } = useSelector((state) => state.category); // Fixed selector

  return (
    <>
      <h3 className="bagCategorieshead text-xl ml-3 md:text-3xl font-semibold text-gray-800 mb-0 pb-0 border-b-2 border-gray-200 md:pb-2 md:mb-6 md:mt-8 md:ml-5">
        CATEGORIES
      </h3>
      <section className="bagcategory bg-gray-100">
        <div className="upperBagCategories flex gap-10 p-7">
          {categories.slice(0,5)?.map((obj) => (
            <div className="bagcard " key={obj.id}>
              <Link to={`/category/${obj.slug}`}>
                <img src={obj.image} alt={obj.name} />
              </Link>
              <p>{obj.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Categories;
