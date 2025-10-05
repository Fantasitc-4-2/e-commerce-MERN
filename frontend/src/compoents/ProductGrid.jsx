import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router";

export default function ProductGrid({ limit }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/results");
        setProducts(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
<<<<<<< HEAD
  
  const handleClick = () =>{
    navigate("/products")
  }
   const visibleProducts = limit ? products.slice(0,limit) : products;
=======
  const handleClick = () => {
    navigate("/products");
  };
  const visibleProducts = limit ? products.slice(0, limit) : products;
>>>>>>> 038866428f8275272ad91798f14b53cbe8e47275
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <div className="grid grid-cols-4 m-5 gap-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {limit && (
        <div className="flex justify-center my-8">
          <button
            className="bg-[#DB4444] font-semibold text-white rounded px-8 py-4"
            onClick={handleClick}
          >
            All Products
          </button>
        </div>
      )}
    </>
  );
}
