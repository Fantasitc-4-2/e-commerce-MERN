import React from "react";
import { useNavigate } from "react-router-dom";

const CartCheckOut = ({ subTotal }) => {
  const navigate = useNavigate();
  const handleCheckout = () => navigate("/order-checkout");
  const shipping = 0;
  const total = subTotal + shipping;

  return (
    <div className="w-full lg:w-[40%] bg-white rounded-2xl shadow-md border border-gray-100 p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center border-b pb-3">
        Cart Summary
      </h2>

      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-3">
          <span>Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : `$${shipping}`}
          </span>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-3 text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        className="mt-8 w-full py-3 rounded-lg bg-[#DB4444] text-white font-semibold text-lg hover:bg-[#b83838] transition-transform duration-200 active:scale-95 shadow-md"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartCheckOut;
