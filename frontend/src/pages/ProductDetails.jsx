import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../compoents/LoadingSpinner";
import StarRating from "../compoents/StarRating";
import {
  ArrowPathIcon,
  HeartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/16/solid";

import RelatedProductsRow from "../compoents/RelatedProductsRow";
import api from "../api/axios";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantatity, setQuantatity] = useState(1);
  const [isWished, setIsWished] = useState(false);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleSubmit = () => {
    const selectedProduct = {
      id: id,
      title: product.title,
      color: color,
      size: size,
      quantatity: quantatity,
    };
    api.post("/carts", selectedProduct);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);

        setProduct(res.data);
        const related = await api.get(
          `/products?category=${res.data.category}`
        );

        setRelatedProducts(related.data.slice(0, 4));
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await api.get(`/products?category=${product.category}`);

  //       setRelatedProducts(res.data.slice(0, 4));
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Product details section */}
      <div className="container mx-auto mb-22 mt-10 relative pt-30 flex justify-center items-center   gap-25">
        <div className="absolute top-0 left-28 flex gap-2">
          <p className="text-gray-500 font-semibold text-sm">Home </p>
          <p className="text-gray-500 font-semibold text-sm">/</p>
          <p className="text-black font-bold text-sm">{product.title}</p>
        </div>
        {/* secondary images section */}
        <aside className="flex flex-col gap-2 w-32  ">
          <img src={product.image} className=" " alt={product.title} />
          <img src={product.image} className=" " alt={product.title} />
          <img src={product.image} className=" " alt={product.title} />
          <img src={product.image} className=" " alt={product.title} />
        </aside>
        {/* Main image section */}
        <div>
          <img
            src={product.image}
            className="  w-[34rem]"
            alt={product.title}
          />
        </div>
        <div className="flex flex-col  basis-1/6">
          <h1 className="text-black font-bold text-xl">{product.title}</h1>
          <div className="flex items-center gap-2">
            <StarRating handleRating={handleRating} rating={rating} />
            <p className="text-sm text-gray-400">{"(150 Reviews)"} </p>
            <p className="text-gray-400 text-sm">|</p>
            <p className="text-sm font-semibold text-green-300">in stock</p>
          </div>
          <div className="font-medium text-2xl">${product.price}</div>
          <div className="text-sm font-semibold mt-4">
            {product.description}
          </div>
          <div className="">
            ____________________________________________________________________________
          </div>
          <div className="mt-4 flex items-center gap-2">
            Colors:
            <button
              className={`p-2 rounded-3xl bg-red-600 hover:cursor-pointer ${
                color === "red" ? "border-3 border-gray-600" : ""
              }`}
              name="red"
              onClick={(e) => setColor(e.target.name)}
            ></button>
            <button
              className={`p-2 rounded-3xl bg-black hover:cursor-pointer ${
                color === "black" ? "border-3 border-gray-600" : ""
              }`}
              name="black"
              onClick={(e) => setColor(e.target.name)}
            ></button>
          </div>
          <div className="my-4 flex items-center gap-2">
            <div className="text-xl font-semibold">Size: </div>
            {["XS", "S", "M", "L", "Xl"].map((size, i) => (
              <button
                key={i}
                className="border-1 border-black rounded-lg w-10 h-10 font-medium hover:bg-gray-300 transition  cursor-pointer"
                onClick={() => setSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex gap-6 justify-start items-center my-4">
            {/* Quantity Counter */}
            <div className="flex justify-center items-center border border-black rounded overflow-hidden h-14">
              <button
                className="border-r border-black w-12 h-full text-4xl font-light cursor-pointer hover:bg-gray-200 transition"
                onClick={() => setQuantatity((q) => Math.max(q - 1, 1))}
              >
                −
              </button>
              <div className="px-8 text-2xl font-semibold select-none">
                {quantatity}
              </div>
              <button
                className="bg-[#DB4444] text-white border-l border-black w-12 h-full text-4xl font-light cursor-pointer hover:bg-[#8e2929] transition"
                onClick={() => setQuantatity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Buy Now */}
            <button
              className="bg-[#DB4444] text-white border border-black rounded py-3 w-56 text-2xl hover:bg-[#8e2929] transition cursor-pointer"
              onClick={handleSubmit}
            >
              Add to cart
            </button>

            {/* Wishlist Icon */}
            <div
              className="p-2 border border-black rounded hover:bg-gray-200 transition cursor-pointer"
              onClick={() => setIsWished((isWished) => !isWished)}
            >
              {isWished ? (
                <HeartFilled className="w-8" />
              ) : (
                <HeartIcon className="w-8" />
              )}
            </div>
          </div>

          <div>
            <div className="border rounded-sm border-black">
              <div className="border border-black flex justify-start gap-6 p-4">
                <TruckIcon className="w-10" />
                <div>
                  <p className="text-lg font-semibold">Free Delivery</p>
                  <p className="underline font-semibold">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="border border-black flex justify-start gap-6 p-6">
                <ArrowPathIcon className="w-10" />
                <div>
                  <p className="text-lg font-semibold">Return Delivery</p>
                  <p className=" font-semibold">
                    Free 30 Days Delivery Returns.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related products section */}

      {relatedProducts.length && (
        <RelatedProductsRow products={relatedProducts} related />
      )}
    </div>
  );
};

export default ProductDetails;
