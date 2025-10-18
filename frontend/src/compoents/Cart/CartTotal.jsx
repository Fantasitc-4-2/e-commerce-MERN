import React from "react";
import CartCheckOut from "./CartCheckOut";

const CartTotal = ({ subTotal }) => {
  return (
    <div className="w-full md:w-[85%] lg:w-[70%] mx-auto flex flex-col lg:flex-row justify-between gap-6 md:gap-8 mb-12 md:mb-20 lg:mb-30 items-stretch lg:items-start px-4 md:px-6 lg:px-0">
      {/* Coupon Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full lg:w-auto lg:flex-1">
        <input
          type="text"
          className="border-black border px-3 md:px-4 py-2 md:py-3 rounded text-sm md:text-base w-full"
          placeholder="Coupon Code"
        />
        <button className="bg-[#DB4444] text-white rounded px-4 py-2 md:py-3 text-sm md:text-base font-medium hover:bg-[#9f2b2b] transition cursor-pointer w-full">
          Apply Coupon
        </button>
      </div>

      {/* Checkout Section */}
      <CartCheckOut subTotal={subTotal} />
    </div>
  );
};

export default CartTotal;
