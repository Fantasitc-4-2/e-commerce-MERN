import { useState } from "react";
import { useNavigate } from "react-router";
import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import StarRating from "../StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { toast } from "react-toastify";
import {
  addToWishList,
  deleteItemWishList,
  getWishList,
} from "../../slices/wishListSlice";
import { HeartIcon as HeartFilled } from "@heroicons/react/16/solid";

export default function ProductCard({
  image,
  quantity,
  title,
  price,
  _id,
  discountRate,
  discountPrice,
}) {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { user } = useSelector((state) => state.auth);
  
  //  Get wishlist from Redux
  const wishlistItems = useSelector((state) => state.wishlist.wishlist) || [];
  
  // Derive isWished from Redux state instead of local state
  const isWished = wishlistItems.some((item) => item?._id === _id);


  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleClick = () => {
    navigate(`/products/${_id}`);
  };

  const handleWish = async () => {
    if (!user) {
      toast.error("Please login to add items to wishlist");
      navigate("/login");
      return;
    }
    
    try {
      if (isWished) {
        await dispatch(deleteItemWishList({ id: _id })).unwrap();
        toast.success("Removed from wishlist");
      } else {
        await dispatch(addToWishList({ id: _id })).unwrap();
        toast.success("Added to wishlist");
      }
      // Refetch to ensure sync
      dispatch(getWishList());
    } catch (error) {
      console.error("Wishlist operation failed:", error);
      toast.error("Wishlist operation failed");
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/login");
      return;
    }
    try {
      await dispatch(addToCart({ id: _id, quantity: 1 })).unwrap();
      toast.success("Added to Cart!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add to cart");
    }
  };

  return (
    <div className="gap-1 group md:my-10">
      <div className=" relative flex items-center justify-center  overflow-hidden cursor-pointer">
        <div className="w-50 h-50 flex items-center justify-center">
          <img
            onClick={handleClick}
            src={image}
            alt=""
            className=" transform max-h-40 transition-transform duration-300 group-hover:-translate-y-6"
          />
        </div>
        <button onClick={handleWish} className="absolute top-3 right-2 bg-gray-100 rounded-3xl p-1">
          {isWished ? (
            <HeartFilled className="w-5 text-[#DB4444]" />
          ) : (
            <HeartIcon className="w-5 " />
          )}
        </button>
        <EyeIcon className="absolute top-12 right-2 w-6 bg-gray-100 rounded-3xl p-1" />
        {discountRate && (
          <div className="bg-[#DB4444] text-white absolute top-3 left-2 w-13 rounded text-[.7rem] text-center p-1 font-light">
            -{discountRate}%
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className=" hover:cursor-pointer absolute bottom-[-3rem] left-0 w-full bg-black text-white py-2 text-sm font-medium transition-all duration-400 group-hover:bottom-0"
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