import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteBagItems } from "../../Features/BagSlice";

function Bagitems({ bagItems }) {
  const dispatch = useDispatch();

  return (
    <>
      {bagItems.map((products) => (
        <div className="bag-item-container">
          <div className="item-left-part w-32 h-32  rounded-md shadow-md">
            <img
              className="bag-item-img h-full w-full  object-contain"
              src={products.images}
              alt="Product"
            />
          </div>

          <div className="item-right-part">
            <div className="company">{products.brand}</div>
            <div className="item-name">{products.title}</div>
            <div className="price-container flex gap-3">
              <span className="current-price">Rs {products.price}</span>
              <span className="original-price line-through">Rs 1499</span>
              <span className="discount-percentage">(33% OFF)</span>
            </div>
            <div className="return-period">
              <span className="return-period-days">14 days</span> return
              available
            </div>
            <div className="delivery-details">
              Delivery by <span className="delivery-details-days">10 Apr</span>
            </div>
          </div>

          <div className="remove-from-cart">
            <RiDeleteBin5Fill
              onClick={() => {
                dispatch(deleteBagItems(products));
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Bagitems;
