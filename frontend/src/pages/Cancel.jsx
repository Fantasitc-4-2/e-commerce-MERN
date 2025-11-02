import React from "react";
import { XCircle } from "lucide-react";

export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 p-6">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl text-center transform transition-all duration-300 hover:scale-[1.02]">
        <div className="flex justify-center mb-6">
          <XCircle className="text-red-500 w-20 h-20 animate-pulse" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Payment Canceled
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          It seems you canceled your payment. <br />
          Please try again or contact support if needed.
        </p>
        <a
          href="/order-checkout"
          className="inline-block bg-[#DB4444] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#b83a3a] transition duration-300"
        >
          Back to Checkout
        </a>
      </div>
    </div>
  );
}
