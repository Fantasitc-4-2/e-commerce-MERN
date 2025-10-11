import React from "react";

const CartCheckOut = () => {
  return (
    <div className="border-2 rounded border-black py-3 px-6 flex flex-col w-[40%]">
      <p className="text-xl text-black font-semibold my-2">Cart Total</p>
      <div className="flex justify-between border-b-1 border-gray-300 my-2">
        <span className="mb-2">Subtotal:</span>
        <span>$1750</span>
      </div>
      <div className="flex justify-between border-b-1 border-gray-300 my-2">
        <span className="mb-2">Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between  my-2">
        <span className="mb-2">Total:</span>
        <span>$1750</span>
      </div>
      <button className="bg-[#DB4444] text-white  rounded w-[60%] mx-auto py-3 mb-6 hover:bg-[#9f2b2b] transition cursor-pointer">
        Process to checkout
      </button>
    </div>
  );
};

export default CartCheckOut;
