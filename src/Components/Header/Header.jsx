import React from "react";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {

  const bagItems = useSelector(state => state.bag)
  return (
    // main div
    <div className=" flex justify-between items-center h-[5.5rem]">
      <div className="flex justify-evenly items-center w-[85vw]">
        {/* logo  */}
        <Link to="/">
        <img
          src="/Image/myntra_logo.webp"
          alt=""
          className="h-[2.9rem]"
          />
          </Link>
        {/* navbar  */}
        <div className="flex list-none gap-[3rem] text-xs font-semibold ">
          <Link to="#">MEN</Link>
          <Link to="#">WOMEN</Link>
          <Link to="#">KIDS</Link>
          <Link to="#">HOME & LINING</Link>
          <Link to="#">BEAUTY</Link>
          <Link to="#">STUDIO</Link>
        </div>

      <div className="flex items-center w-[40%] border rounded-md shadow-sm bg-gray-100">
        <FiSearch className="ml-3 text-gray-500" />
        <input
          type="text"
          className="w-full py-2 px-4 bg-transparent outline-none text-sm"
          placeholder="Search for products, brands and more"
        />
      </div>
      </div>

      {/* Profile section  */}
      <div className="flex items-center  font-semibold justify-center w-[15vw]  gap-7">
        <Link className="flex flex-col  items-center">
          <CiUser className="text-2xl" />
          <span className="text-[0.7rem] ">Profile</span>
        </Link>
        <Link className="flex flex-col  items-center">
          <CiHeart className="text-2xl" />
          <span className="text-[0.7rem] ">Wishlist</span>
        </Link>
        <Link to="/bag" className="flex flex-col  items-center relative">
          <HiOutlineShoppingBag className="text-2xl " />
          <span className="absolute -top-2 left-3.5 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">{bagItems.length}</span>
          <span className="text-[0.7rem] ">Bag</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
