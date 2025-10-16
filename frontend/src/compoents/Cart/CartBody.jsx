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
      <div className="w-full text-gray-600 mx-auto  my-36">
        <p className="text-9xl text-center ">Your Cart is empty :l</p>
      </div>
    ); 
  return (
    <div className="flex flex-col gap-5 ">
      <div className="grid grid-cols-4 bg-white rounded-lg shadow-sm px-8 py-4 w-[70%] mx-auto font-medium text-gray-700 mb-4">
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