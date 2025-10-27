import React from "react";
import { Link } from "react-router-dom";

const CartMiddle = () => {
  return (
    <div className="flex justify-between items-center w-[85%] lg:w-[70%] mx-auto my-12 px-4">
      <Link to="/">
        <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition">
          Return to Shop
        </button>
      </Link>
      <Link to="/products">
        <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition">
          Update Cart
        </button>
      </Link>
    </div>
  );
};

export default CartMiddle;
