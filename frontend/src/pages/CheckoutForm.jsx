// CheckoutForm.jsx
import React, { useState } from "react";

const CheckoutForm = ({ items = [] }) => {
  const [coupon, setCoupon] = useState("");

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-10">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-8 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
            <input
              type="text"
              placeholder="Street Address*"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
            <input
              type="text"
              placeholder="Town/City*"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
            />
          </form>
        </div>

        <div className="flex-1 bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Your Order</h2>
          <div className="space-y-4">
            {items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>
                    ${item.price} × {item.quantity} = ${item.price * item.quantity}
                  </span>
                </div>
              ))
            )}
            <hr className="border-gray-300" />
            <div className="flex justify-between font-semibold">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#DB4444]"
              />
              <button className="bg-[#DB4444] text-white px-4 rounded-md hover:bg-red-700 transition">
                Apply
              </button>
            </div>
            <button className="w-full mt-4 bg-[#DB4444] text-white py-3 rounded-md hover:bg-red-700 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
