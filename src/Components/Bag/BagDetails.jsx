import React from 'react'
import { useSelector } from 'react-redux'


function BagDetails() {
  const bagItems =  useSelector((state)=> state.bag)
  let totalMRP = 0;
  let totalDiscount = 0;
  const Convenience_Fee = bagItems.length > 0 ? 50 : 0;
  bagItems.map((items)=> {totalMRP += items. current_price
    totalDiscount += items.original_price - items.current_price
  })
  let finalMRP  = totalMRP  + Convenience_Fee;


  


  return (
    <div className="bag-summary">
    <div className="bag-details-container">
      <div className="price-header">PRICE DETAILS ({bagItems.length} Items) </div>
      <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">₹{totalMRP}</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">
          ₹{totalDiscount}
        </span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">₹{Convenience_Fee}</span>
      </div>
      <hr />
      <div className="price-footer">
        <span className="price-item-tag">Total Amount</span>
        <span className="price-item-value">₹{finalMRP}</span>
      </div>
    </div>
    <button className="btn-place-order">
      <div className="css-xjhrni" >PLACE ORDER</div>
    </button>
  </div>
  )
}

export default BagDetails
