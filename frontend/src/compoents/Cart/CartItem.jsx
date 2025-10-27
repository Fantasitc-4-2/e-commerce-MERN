import { useEffect, useState } from "react";

const CartItem = ({
  image,
  title,
  price,
  _id,
  productId,
  handleDelete,
  quantity: initialQuantity,
  handleChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleQuantityChange = (newQuantity) => {
    const validQuantity = Math.max(1, parseInt(newQuantity) || 1);
    setQuantity(validQuantity);
    handleChange(productId._id, validQuantity);
  };

  const subtotal = (price * quantity).toFixed(2);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full md:w-[85%] lg:w-[70%] mx-auto transition hover:shadow-lg">
      <div className="hidden md:grid grid-cols-4 items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => handleDelete(_id)}
              className="absolute -top-2 -left-2 bg-[#DB4444] text-white w-5 h-5 rounded-full text-xs font-bold hover:bg-[#a83232] transition"
            >
              ×
            </button>
            <img
              src={image || "product-1.jpg"}
              alt={title || "Product"}
              className="w-16 h-16 object-contain rounded-md"
            />
          </div>
          <p className="font-medium text-gray-800 truncate max-w-[150px]">
            {title || "Product"}
          </p>
        </div>

        <span className="text-gray-700 font-medium">${price}</span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1 text-sm font-bold"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            className="border border-gray-300 w-14 text-center rounded-md"
          />
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1 text-sm font-bold"
          >
            +
          </button>
        </div>

        <span className="font-semibold text-gray-900">${subtotal}</span>
      </div>

      <div className="md:hidden flex flex-col p-4 gap-3">
        <div className="flex gap-3">
          <div className="relative flex-shrink-0">
            <button
              onClick={() => handleDelete(_id)}
              className="absolute -top-2 -left-2 bg-[#DB4444] text-white w-5 h-5 rounded-full text-xs font-bold hover:bg-[#a83232] transition"
            >
              ×
            </button>
            <img
              src={image || "product-1.jpg"}
              alt={title}
              className="w-20 h-20 object-contain rounded-md"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="font-medium text-gray-800 text-sm">{title}</h3>
            <p className="text-gray-600 text-sm">Price: ${price}</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1 text-sm font-bold"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              className="border border-gray-300 w-14 text-center rounded-md"
            />
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="bg-gray-100 hover:bg-gray-200 rounded-full px-2 py-1 text-sm font-bold"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-600 block">Subtotal</span>
            <span className="font-semibold text-base text-gray-900">
              ${subtotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
