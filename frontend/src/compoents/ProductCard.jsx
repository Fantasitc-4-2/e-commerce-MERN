import React from "react";
import { Link } from "react-router";

export default function ProductCard({ image, title, description, _id }) {
  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-lg">
      <Link to={`/products/${_id}`}>
        <img className="p-8 rounded-t-lg" src={image} alt={title} />

        <h5 className="text-xl font-semibold tracking-tight">{title}</h5>
      </Link>
      <p>{description}</p>
    </div>
  );
}
