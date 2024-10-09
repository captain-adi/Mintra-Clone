import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addBagitems } from "../../Features/BagSlice";
function Homeitems({item}) {


  const dispatch = useDispatch()
  return (
 
    <div className=" w-[250px] m-[10px]" >
    <img className="w-full" src={item.image} alt="item image" />
    <div className="text-xs font-bold">
      {item.rating.stars} ⭐ | {item.rating.count}
    </div>
    <div className="mt-4 text-base font-bold text-gray-800 mb-2 truncate">
      {item.company}
    </div>
    <div className="text-sm text-gray-600 truncate">{item.item_name}</div>
    <div className="mt-2 text-sm text-gray-800">
      <span className="font-bold">Rs {item.current_price}</span>
      <span className="line-through text-gray-500 ml-1 text-xs">
        Rs {item.original_price}
      </span>
      <span className="text-orange-400 ml-1 text-xs">
        ({item.discount_percentage}% OFF)
      </span>
    </div>
  
    <button
     onClick={()=>dispatch(addBagitems({
       image:item.image,
       rating:item.rating.stars,
       company:item.company,
       item_name:item.item_name,
       current_price :item.current_price,
       discount_percentage:item.discount_percentage,
       original_price : item.original_price,
       return_period:item.return_period,
       delivery_date:item.delivery_date,
       id:item.id
     }))}
      type="button"
      className=" flex  justify-center items-center py-2 gap-2 mt-2  w-full bg-green-200 border-none   rounded-lg cursor-pointer"
    >
      <GrAddCircle /> Add to Bag
    </button>
  </div>


  
  )
}

export default Homeitems;
