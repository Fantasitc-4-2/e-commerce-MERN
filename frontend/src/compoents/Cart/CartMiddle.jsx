import React from "react";
import { Link } from "react-router-dom";

const CartMiddle = () => {
  return (
    <div class="flex justify-between mt-8 w-[70%] mx-auto my-10">
      <Link to="/">
        <button class="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition cursor-pointer font-semibold ">
          Return To Shop
        </button>
      </Link>
      <Link to="/products">
        <button class="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition cursor-pointer font-semibold">
          Update Cart
        </button>
      </Link>
    </div>
  );
};

export default CartMiddle;
