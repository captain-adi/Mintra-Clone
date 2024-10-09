import React, { useEffect } from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBagItems } from '../../Features/BagSlice';

function Bagitems({item,bagItems,index}) {
 

 const dispatch = useDispatch()
  return (

    <div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={item.image} />
    </div>
    <div className="item-right-part">
      <div className="company">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount-percentage">
          ({item.discount_percentage}% OFF)
        </span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{item.return_period} days</span>{" "}
        return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">{item.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart" >
      <RiDeleteBin5Fill onClick={()=>{
          dispatch(deleteBagItems(index))
      }} />
    </div>
  </div>
  )
}

export default Bagitems
