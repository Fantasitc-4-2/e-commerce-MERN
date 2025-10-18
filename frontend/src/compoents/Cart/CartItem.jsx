import { useState } from "react";

const CartItem = ({ image, title, price, _id, handleDelete, handleChange }) => {
  const [quantity, setQuantity] = useState(1);

  const subtotal = (price * quantity).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-sm w-full md:w-[85%] lg:w-[70%] mx-auto">
      {/* Desktop/Tablet Layout (md+) */}
      <div className="hidden md:grid grid-cols-4 items-center px-4 md:px-6 lg:px-8 py-3 md:py-4">
        {/* Product Column */}
        <div className="flex justify-start gap-3 md:gap-4 lg:gap-5 items-center">
          <div className="relative">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold hover:bg-red-600 transition cursor-pointer absolute -top-2 -left-2 z-10"
            >
              ×
            </button>
            <img
              src={image || "product-1.jpg"}
              alt={title || "Product"}
              className="w-12 md:w-14 lg:w-16 object-contain"
            />
          </div>
          <div className="text-sm md:text-base font-medium truncate max-w-[120px] lg:max-w-none">
            {title || "LCD Monitor"}
          </div>
        </div>

        {/* Price Column */}
        <span className="text-sm md:text-base">${price}</span>

        {/* Quantity Column */}
        <span>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="border-black border w-14 md:w-16 lg:w-20 px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded text-sm md:text-base"
          />
        </span>

        {/* Subtotal Column */}
        <span className="text-sm md:text-base font-semibold">${subtotal}</span>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col p-4 gap-3">
        <div className="flex gap-3">
          {/* Image and Delete Button */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold hover:bg-red-600 transition cursor-pointer absolute -top-2 -left-2 z-10"
            >
              ×
            </button>
            <img
              src={image || "product-1.jpg"}
              alt={title || "Product"}
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-between">
            <h3 className="font-medium text-sm">{title}</h3>
            <p className="text-gray-600 text-sm">Price: ${price}</p>
          </div>
        </div>

        {/* Quantity and Subtotal */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Qty:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                setQuantity(Math.max(1, parseInt(e.target.value) || 1));
                handleChange(_id, parseInt(e.target.value));
              }}
              className="border-black border w-16 px-3 py-1 rounded text-sm"
            />
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-600 block">Subtotal</span>
            <span className="font-semibold text-base">${subtotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
