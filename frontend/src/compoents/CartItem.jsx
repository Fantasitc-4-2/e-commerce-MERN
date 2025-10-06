import React from "react";

const CartItem = () => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg shadow-sm px-6 py-2 w-[90%] mx-auto  ">
      <div className="flex justify-center gap-4 items-center">
        <div>
          <div className="relative">
            <button className="bg-red-400 text-white  rounded-full w-4 h-4 flex items-center justify-center text-sm font-bold hover:bg-red-600 transition cursor-pointer absolute">
              ×
            </button>
            <img src="product-1.jpg" alt="" className="w-12" />
          </div>
        </div>
        <div>LCD Monitor</div>
      </div>

      <span>$650</span>
      <span>
        <input
          type="number"
          min="1"
          value="1"
          className="border-black border w-16 px-4 py-2 rounded appearance-auto"
        />
      </span>
      <span>$650</span>
    </div>
  );
};

export default CartItem;
