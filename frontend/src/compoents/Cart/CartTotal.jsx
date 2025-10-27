import React from "react";
import CartCheckOut from "./CartCheckOut";

const CartTotal = ({ subTotal }) => {
  return (
    <div className="w-full md:w-[85%] lg:w-[70%] mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-4 md:px-6 lg:px-0 mb-20">
      
      {/* Coupon Section */}
      <div className="w-full lg:flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col sm:flex-row gap-3 items-center">
        <input
          type="text"
          className="flex-1 w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[#DB4444]/40 outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base"
          placeholder="Enter coupon code"
        />
        <button className="bg-[#DB4444] text-white px-6 py-2.5 rounded-lg font-medium text-sm md:text-base hover:bg-[#b83838] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto">
          Apply Coupon
        </button>
      </div>

      {/* Checkout Section */}
      <CartCheckOut subTotal={subTotal} />
    </div>
  );
};

export default CartTotal;
