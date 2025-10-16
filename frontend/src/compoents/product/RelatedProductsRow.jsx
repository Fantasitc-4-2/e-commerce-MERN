import React from "react";
import { Link } from "react-router-dom";
import SectionName from "../SectionName";
import ProductCard from "./ProductCard";
const RelatedProductsRow = ({ products, related }) => {
  return (
    <div className=" mb-30  gap-10 container mx-auto flex  flex-col w-auto">
      {!related ? (
        <div className=" flex justify-between  items-center ">
          <div className="flex items-center gap-3">
            <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
            <p className="text-black font-medium">Just For You</p>
          </div>
          <button className="border border-black px-8  py-3 text-sm font-bold ">
            See All
          </button>
        </div>
      ) : (
        <SectionName section="Related Items"/>
      )}
      <div className="grid grid-cols-4 gap-10">
        {products.map((product) => (
          <Link to={`/products/${product._id}`}>
            <ProductCard key={product._id} {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsRow;
