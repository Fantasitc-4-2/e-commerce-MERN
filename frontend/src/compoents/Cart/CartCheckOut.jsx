import React from "react";
import { useNavigate } from "react-router-dom";

const CartCheckOut = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to CheckoutForm.jsx
  };

  // You can later replace these with dynamic state if needed
  const subtotal = 1750;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="border-2 rounded border-black py-3 px-6 flex flex-col w-[40%]">
      <p className="text-xl text-black font-semibold my-2">Cart Total</p>
      <div className="flex justify-between border-b border-gray-300 my-2">
        <span className="mb-2">Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between border-b border-gray-300 my-2">
        <span className="mb-2">Shipping:</span>
        <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
      </div>
      <div className="flex justify-between my-2">
        <span className="mb-2">Total:</span>
        <span>${total}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-[#DB4444] text-white rounded w-[60%] mx-auto py-3 mb-6 hover:bg-[#9f2b2b] transition cursor-pointer"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartCheckOut;
