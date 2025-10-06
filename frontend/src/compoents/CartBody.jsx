import React from "react";
import CartItem from "./CartItem";

const CartBody = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center bg-white rounded-lg shadow-sm px-8 py-4 w-[90%] mx-auto  ">
        <span className="font-medium text-gray-700">Product</span>
        <span className="font-medium text-gray-700">Price</span>
        <span className="font-medium text-gray-700">Quantity</span>
        <span className="font-medium text-gray-700">Subtotal</span>
      </div>
      <CartItem />
    </div>
  );
};

export default CartBody;
