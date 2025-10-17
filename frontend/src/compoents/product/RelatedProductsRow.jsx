import React from "react";
import { Link } from "react-router-dom";
import SectionName from "../SectionName";
import ProductCard from "./ProductCard";

const RelatedProductsRow = ({ products, related }) => {
  return (
    <div className="mb-12 md:mb-20 lg:mb-30 gap-6 md:gap-8 lg:gap-10 container mx-auto flex flex-col w-auto px-4 md:px-6 lg:px-0">
      {!related ? (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-4 md:w-5 h-8 md:h-10 bg-[#DB4444] rounded"></div>
            <p className="text-black font-medium text-sm md:text-base">
              Just For You
            </p>
          </div>
          <button className="border border-black px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm font-bold hover:bg-gray-100 transition w-full sm:w-auto">
            See All
          </button>
        </div>
      ) : (
        <SectionName section="Related Items" />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {products.map((product) => (
          <Link key={product._id} to={`/products/${product._id}`}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsRow;
