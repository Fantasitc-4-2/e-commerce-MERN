import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../compoents/LoadingSpinner";
import StarRating from "../compoents/StarRating";
import {
  ArrowPathIcon,
  HeartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartFilled } from "@heroicons/react/16/solid";

import RelatedProductsRow from "../compoents/product/RelatedProductsRow";
import api from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  deleteItemWishList,
  getWishList,
} from "../slices/wishListSlice";
import { addToCart } from "../slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantatity, setQuantatity] = useState(1);
  // const [isWished, setIsWished] = useState(false);
  const navigate = useNavigate();
  let { user } = useSelector((state) => state.auth);
  const isWished = wishlistItems?.some((item) => item._id === id);

  useEffect(() => {
    dispatch(getWishList());
  }, [dispatch]);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleWish = async () => {
    try {
      if (isWished) {
        await dispatch(deleteItemWishList({ id })).unwrap();
      } else {
        await dispatch(addToWishList({ id })).unwrap();
      }
      // Optionally refetch wishlist to ensure sync
      dispatch(getWishList());
    } catch (error) {
      console.error("Wishlist operation failed:", error);
    }
  };

  // Add to cart handler
  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/login");
      return;
    }
    try {
      await dispatch(addToCart({ id: id, quantity: quantatity })).unwrap(); // ✅ Add quantity
      toast.success("Added to Cart!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add to cart");
    }
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

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Product details section */}
      <div className="container mx-auto mb-12 md:mb-22 mt-6 md:mt-10 px-4 md:px-6 lg:px-0 relative pt-12 md:pt-20 lg:pt-30 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4 md:gap-8 lg:gap-25">
        {/* Breadcrumb */}
        <div className="absolute top-0 left-4 md:left-8 lg:left-28 flex gap-2">
          <p className="text-gray-500 font-semibold text-xs md:text-sm">Home</p>
          <p className="text-gray-500 font-semibold text-xs md:text-sm">/</p>
          <p className="text-black font-bold text-xs md:text-sm truncate max-w-[200px] md:max-w-none">
            {product.title}
          </p>
        </div>

        {/* Images Section - Mobile: Single column, Desktop: Side by side */}
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
          {/* Secondary images - Hidden on mobile, shown on md+ */}
          <aside className="hidden md:flex flex-row md:flex-col gap-2 md:w-24 lg:w-32 overflow-x-auto md:overflow-visible">
            <img
              src={product.image}
              className="w-20 md:w-full flex-shrink-0"
              alt={product.title}
            />
            <img
              src={product.image}
              className="w-20 md:w-full flex-shrink-0"
              alt={product.title}
            />
            <img
              src={product.image}
              className="w-20 md:w-full flex-shrink-0"
              alt={product.title}
            />
            <img
              src={product.image}
              className="w-20 md:w-full flex-shrink-0"
              alt={product.title}
            />
          </aside>

          {/* Main image */}
          <div className="w-full md:w-auto flex justify-center">
            <img
              src={product.image}
              className="w-full md:w-96 lg:w-[34rem] max-w-md md:max-w-none object-contain"
              alt={product.title}
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col w-full lg:basis-1/6">
          <h1 className="text-black font-bold text-lg md:text-xl lg:text-2xl">
            {product.title}
          </h1>

          {/* Rating and Stock */}
          <div className="flex flex-wrap items-center gap-2 my-2">
            <StarRating handleRating={handleRating} rating={rating} />
            <p className="text-xs md:text-sm text-gray-400">
              {"(150 Reviews)"}
            </p>
            <p className="text-gray-400 text-xs md:text-sm">|</p>
            {quantatity === 0 ? (
              <p className="text-xs md:text-sm font-semibold text-red-300">
                out of stock
              </p>
            ) : (
              <p className="text-xs md:text-sm font-semibold text-green-300">
                in stock
              </p>
            )}
          </div>

          {/* Price */}
          <div className="font-medium text-xl md:text-2xl my-2">
            ${product.price}
          </div>

          {/* Description */}
          <div className="text-xs md:text-sm font-semibold mt-2 md:mt-4">
            {product.description}
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-gray-300"></div>

          {/* Colors */}
          <div className="mt-2 md:mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-sm md:text-base">Colors:</span>
            <button
              className={`p-2 rounded-full bg-red-600 hover:cursor-pointer ${
                color === "red" ? "ring-2 ring-gray-600 ring-offset-2" : ""
              }`}
              name="red"
              onClick={(e) => setColor(e.target.name)}
            ></button>
            <button
              className={`p-2 rounded-full bg-black hover:cursor-pointer ${
                color === "black" ? "ring-2 ring-gray-600 ring-offset-2" : ""
              }`}
              name="black"
              onClick={(e) => setColor(e.target.name)}
            ></button>
          </div>

          {/* Sizes */}
          <div className="my-3 md:my-4 flex items-center gap-2 flex-wrap">
            <div className="text-base md:text-xl font-semibold">Size:</div>
            {["XS", "S", "M", "L", "XL"].map((sizeOption, i) => (
              <button
                key={i}
                className={`border border-black rounded-lg w-8 h-8 md:w-10 md:h-10 text-sm md:text-base font-medium hover:bg-gray-300 transition cursor-pointer ${
                  size === sizeOption ? "bg-gray-300" : ""
                }`}
                onClick={() => setSize(sizeOption)}
              >
                {sizeOption}
              </button>
            ))}
          </div>

          {/* Quantity and Actions */}
          <div className="flex  sm:flex-row gap-3 md:gap-6 justify-start  items-center my-3 md:my-4">
            {/* Quantity Counter */}
            <div className="flex justify-center items-center border border-black rounded overflow-hidden h-12 md:h-14  sm:w-auto">
              <button
                className="border-r border-black w-12 h-full text-2xl md:text-4xl font-light cursor-pointer hover:bg-gray-200 transition"
                onClick={() => setQuantatity((q) => Math.max(q - 1, 1))}
              >
                −
              </button>
              <div className="px-6 md:px-8 text-xl md:text-2xl font-semibold select-none">
                {quantatity}
              </div>
              <button
                className="bg-[#DB4444] text-white border-l border-black w-12 h-full text-2xl md:text-4xl font-light cursor-pointer hover:bg-[#8e2929] transition"
                onClick={() => setQuantatity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Buy Now */}
            <button
              className="bg-[#DB4444] text-white border border-black rounded py-2 md:py-3 w-[50%] sm:flex-1 md:w-56 text-lg md:text-2xl hover:bg-[#8e2929] transition cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>

            {/* Wishlist Icon */}

            <button
              onClick={handleWish}
              className="p-2 border border-black rounded hover:bg-gray-200 transition cursor-pointer self-center sm:self-auto"
            >
              {isWished ? (
                <HeartFilled className="w-6 md:w-8" />
              ) : (
                <HeartIcon className="w-6 md:w-8" />
              )}
            </button>
          </div>

          {/* Delivery Info */}
          <div className="mt-4">
            <div className="border rounded-sm border-black">
              <div className="border-b border-black flex justify-start gap-4 md:gap-6 p-3 md:p-4">
                <TruckIcon className="w-8 md:w-10 flex-shrink-0" />
                <div>
                  <p className="text-base md:text-lg font-semibold">
                    Free Delivery
                  </p>
                  <p className="underline font-semibold text-xs md:text-sm">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex justify-start gap-4 md:gap-6 p-3 md:p-6">
                <ArrowPathIcon className="w-8 md:w-10 flex-shrink-0" />
                <div>
                  <p className="text-base md:text-lg font-semibold">
                    Return Delivery
                  </p>
                  <p className="font-semibold text-xs md:text-sm">
                    Free 30 Days Delivery Returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products section */}
      {relatedProducts.length > 0 && (
        <RelatedProductsRow products={relatedProducts} related />
      )}
    </div>
  );
};

export default ProductDetails;
