import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CheckCircle2 } from "lucide-react";
import { clearCheckout } from "../slices/checkoutSlice";

export default function Success() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCheckout());
    dispatch({ type: "cart/clear" });
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-100 p-6">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl text-center transform transition-all duration-300 hover:scale-[1.02]">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="text-green-500 w-20 h-20 animate-bounce" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for your purchase  <br />
          Your order has been placed successfully.
        </p>
        <a
          href="/"
          className="inline-block bg-[#DB4444] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#b83a3a] transition duration-300"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
