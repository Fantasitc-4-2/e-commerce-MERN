import { useState } from "react";
import { useNavigate } from "react-router";
import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import StarRating from "../StarRating";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { toast } from "react-toastify";

export default function ProductCard({
  image,
  title,
  price,
  _id,
  discountRate,
  discountPrice,
}) {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cart);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleClick = () => {
    navigate(`products/${_id}`);
  };

  const handleAddToCart = async () => {
    try {
      await dispatch(addToCart({ id: _id })).unwrap();
      toast.success("Added to Cart!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add to cart");
    }
  };
  return (
    <div className=" gap-1 group">
      <div className="relative flex items-center justify-center  overflow-hidden cursor-pointer">
        <img
          onClick={handleClick}
          src={"product-1.jpg"}
          alt=""
          className="w-60 h-60  transform transition-transform duration-300 group-hover:-translate-y-6"
        />
        <HeartIcon className="absolute top-3 right-2 w-6 bg-gray-100 rounded-3xl p-1" />
        <EyeIcon className="absolute top-12 right-2 w-6 bg-gray-100 rounded-3xl p-1" />
        {discountRate && (
          <div className="bg-[#DB4444] text-white absolute top-3 left-2 w-13 rounded text-[.7rem] text-center p-1 font-light">
            -{discountRate}%
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="hover:cursor-pointer absolute bottom-[-3rem] left-0 w-full bg-black text-white py-2 text-sm font-medium transition-all duration-400 group-hover:bottom-0"
        >
          Add to Cart
        </button>
      </div>
      <p className="font-semibold">{title}</p>
      <div className="flex gap-4">
        <p className="text-[#DB4444] font-medium">{price}</p>
        <p className="text-gray-400 font-medium line-through">
          {discountPrice}
        </p>
      </div>
      <StarRating rating={rating} handleRating={handleRating} />
    </div>
  );
}
