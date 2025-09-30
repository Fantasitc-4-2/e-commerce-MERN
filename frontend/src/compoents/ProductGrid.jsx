import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="grid grid-cols-4 m-5 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
