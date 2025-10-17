import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import axios from "axios";

const CartBody = () => {
  const [items, SetItems] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/results`);
        SetItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCart();
  }, []);

  if (items.length === 0)
    return (
      <div className="w-full text-gray-600 mx-auto my-12 md:my-24 lg:my-36 px-4">
        <p className="text-4xl md:text-6xl lg:text-9xl text-center">
          Your Cart is empty :l
        </p>
      </div>
    );

  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 px-4 md:px-6 lg:px-0">
      {/* Header - Hidden on mobile, shown on tablet+ */}
      <div className="hidden md:grid grid-cols-4 bg-white rounded-lg shadow-sm px-4 md:px-6 lg:px-8 py-3 md:py-4 w-full md:w-[85%] lg:w-[70%] mx-auto font-medium text-sm md:text-base text-gray-700 mb-2 md:mb-4">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>

      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartBody;
