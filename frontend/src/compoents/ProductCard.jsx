import React from "react";
import { Link } from "react-router";

export default function ProductCard({ image, title, price, id }) {
  const handleDelete = () => {};
  return (
    <div className="flex flex-col justify-between w-full max-w-sm border border-gray-200 rounded-lg">
      <Link to={`/products/${id}`}>
        <img className="p-8 rounded-t-lg" src={image} alt={title} />

        <h5 className="text-xl font-semibold tracking-tight">{title}</h5>
      </Link>

      <div className="m-2">
        <p className="text-red-500">${price}</p>
        <button
          onClick={handleDelete}
          className="bg-black p-2 rounded text-white w-[100%]"
        >
          Add To Cart{" "}
        </button>
      </div>
    </div>
  );
}
