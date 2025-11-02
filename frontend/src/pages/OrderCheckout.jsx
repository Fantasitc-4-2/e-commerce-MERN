import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { CreditCard, ShoppingBag, ShieldCheck } from "lucide-react";

export default function OrderCheckout() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  const items = cart?.items || [];
  const subtotal = items.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setLoading(true);
    try {
      const resCart = await api.get("/carts");

      const cartId =
        resCart.data?.cartUser?._id || cart?._id || cart?.id;

      if (!cartId) {
        toast.error("Cart not found!");
        setLoading(false);
        return;
      }

      const res = await api.post(`/orders/checkout/${cartId}`, {
        shippingAddress: {
          address: "Cairo, Egypt",
          city: "Cairo",
          postalCode: "12345",
          country: "EG",
        },
      });

      const session = res.data?.session;

      if (session?.url) {
        window.location.href = session.url;
      } else {
        toast.error("Something went wrong during checkout.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error(error.response?.data?.message || "Checkout failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">
        {/* 🛍️ Header */}
        <div className="flex items-center justify-center mb-10">
          <ShoppingBag className="w-10 h-10 text-[#DB4444] mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Order Checkout</h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 🧾 Order Summary */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Your Order
            </h2>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {items.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Your cart is empty
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id ?? item._id}
                    className="flex justify-between items-center bg-white rounded-xl p-4 border hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image || item.productId?.image || "/placeholder.png"}
                        alt={item.name || item.productId?.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.name || item.productId?.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold text-gray-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 border-t pt-4 text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-3">
                <span>Total:</span>
                <span className="text-[#DB4444]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* 💳 Payment Section */}
          <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Payment Details
            </h2>

            <p className="text-gray-500 mb-6 flex items-center gap-2">
              <CreditCard className="text-[#DB4444]" size={20} />
              Payments are securely processed via Stripe.
            </p>

            <button
              onClick={handleCheckout}
              disabled={loading || items.length === 0}
              className={`w-full py-3 rounded-xl text-white text-lg font-semibold transition-transform ${
                loading || items.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#DB4444] hover:bg-[#a83333] hover:scale-[1.02]"
              }`}
            >
              {loading ? "Processing..." : "Proceed to Secure Checkout"}
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="mt-4 w-full py-3 rounded-xl text-[#DB4444] border border-[#DB4444] font-medium hover:bg-[#DB4444] hover:text-white transition"
            >
              Back to Cart
            </button>

            <div className="mt-10 text-center">
              <div className="flex items-center justify-center text-gray-500 text-sm">
                <ShieldCheck className="text-green-500 mr-2" size={18} />
                <p>SSL Secured Checkout</p>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="inline-block w-12 mx-1 opacity-70"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                alt="Mastercard"
                className="inline-block w-10 mx-2 opacity-70"
              />
              <img
                src="data:image/png;base64,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"
                alt="Amex"
                className="inline-block w-20 mx-1 opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
