import React from "react";
import CartCheckOut from "./CartCheckOut";

const CartTotal = () => {
  return (
    <div className="w-[70%] mx-auto flex justify-between mb-30 items-start">
      <div className="grid grid-cols-2 gap-4 ">
        <input
          type="text"
          className="border-black border px-4 py-3 rounded"
          placeholder="Coupon Code"
        />
        <button className="bg-[#DB4444] text-white  rounded  hover:bg-[#9f2b2b] transition cursor-pointer">
          Apply Coupon
        </button>
      </div>
      <CartCheckOut />
    </div>
  );
};

export default CartTotal;
