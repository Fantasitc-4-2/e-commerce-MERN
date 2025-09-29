import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../compoents/LoadingSpinner";
import StarRating from "../compoents/StarRating";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState();
  const handleRating = (rate) => {
    setRating(rate);
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/results/${id}`);

        setProduct(res.data);
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
    <div className="container mx-auto mb-32 mt-10 relative pt-30 flex justify-center  gap-25">
      <div className="absolute top-0 left-28 flex gap-2">
        <p className="text-gray-500 font-semibold text-sm">Home </p>
        <p className="text-gray-500 font-semibold text-sm">/</p>
        <p className="text-black font-bold text-sm">{product.title}</p>
      </div>
      <aside className="flex flex-col gap-2 w-32  ">
        <img
          src={product.image}
          className=" border-2 border-[#DB4444]"
          alt={product.title}
        />
        <img
          src={product.image}
          className=" border-2 border-[#DB4444]"
          alt={product.title}
        />
        <img
          src={product.image}
          className=" border-2 border-[#DB4444]"
          alt={product.title}
        />
        <img
          src={product.image}
          className=" border-2 border-[#DB4444]"
          alt={product.title}
        />
      </aside>
      <div>
        <img
          src={product.image}
          className=" border-2 border-[#DB4444] w-[34rem]"
          alt={product.title}
        />
      </div>
      <div className="flex flex-col basis-1/6">
        <h1 className="text-black font-bold text-xl">{product.title}</h1>
        <div className="flex items-center gap-2">
          <StarRating handleRating={handleRating} rating={rating} />
          <p className="text-sm text-gray-400">{"(150 Reviews)"} </p>
          <p className="text-gray-400 text-sm">|</p>
          <p className="text-sm font-semibold text-green-300">in stock</p>
        </div>
        <div className="font-medium text-2xl">${product.price}</div>
        <div className="text-sm font-semibold mt-4">{product.description}</div>
        <div>
          ______________________________________________________________
        </div>
        <div className="mt-4">
          Colors:<button className="p-2 rounded bg-red"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
