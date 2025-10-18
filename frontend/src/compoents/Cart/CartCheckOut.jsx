import React from "react";
import { useNavigate } from "react-router-dom";

const CartCheckOut = ({ subTotal }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const shipping = 0;
  const total = subTotal + shipping;

  return (
    <div className="border-2 rounded border-black py-4 md:py-5 lg:py-6 px-4 md:px-5 lg:px-6 flex flex-col w-full lg:w-[40%] lg:max-w-md">
      <p className="text-lg md:text-xl text-black font-semibold mb-3 md:mb-4">
        Cart Total
      </p>

      {/* Subtotal */}
      <div className="flex justify-between border-b border-gray-300 py-2 md:py-3">
        <span className="text-sm md:text-base text-gray-700">Subtotal:</span>
        <span className="text-sm md:text-base font-medium">${subTotal}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between border-b border-gray-300 py-2 md:py-3">
        <span className="text-sm md:text-base text-gray-700">Shipping:</span>
        <span className="text-sm md:text-base font-medium">
          {shipping === 0 ? "Free" : `$${shipping}`}
        </span>
      </div>

      {/* Total */}
      <div className="flex justify-between py-2 md:py-3 mb-3 md:mb-4">
        <span className="text-sm md:text-base font-semibold">Total:</span>
        <span className="text-base md:text-lg font-bold">${total}</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="bg-[#DB4444] text-white rounded w-full md:w-[70%] lg:w-[60%] mx-auto py-2 md:py-3 text-sm md:text-base font-medium hover:bg-[#9f2b2b] transition cursor-pointer"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartCheckOut;
