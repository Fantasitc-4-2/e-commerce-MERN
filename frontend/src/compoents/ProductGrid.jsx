import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductGrid() {
  const [data] = useState([
    {
      title: "product 1",
      description: "product descritpion",
      img: "product-1.jpg",
    },
    {
      title: "product 2",
      description: "product descritpion",
      img: "product-2.jpg",
    },
    {
      title: "product 1",
      description: "product descritpion",
      img: "product-1.jpg",
    },
    {
      title: "product 2",
      description: "product descritpion",
      img: "product-2.jpg",
    },
    {
      title: "product 1",
      description: "product descritpion",
      img: "product-1.jpg",
    },
    {
      title: "product 2",
      description: "product descritpion",
      img: "product-2.jpg",
    },
    {
      title: "product 1",
      description: "product descritpion",
      img: "product-1.jpg",
    },
    {
      title: "product 2",
      description: "product descritpion",
      img: "product-2.jpg",
    },
    {
      title: "product 1",
      description: "product descritpion",
      img: "product-1.jpg",
    },
    {
      title: "product 2",
      description: "product descritpion",
      img: "product-2.jpg",
    },
    {
      title: "product 1",
      description: "product descritpion",
      img: "product-1.jpg",
    },
    {
      title: "product 2",
      description: "product descritpion",
      img: "product-2.jpg",
    },
    {
      title: "product 1",
      description: "product descritpion",
      img: "product-1.jpg",
    },
    {
      title: "product 2",
      description: "product descritpion",
      img: "product-2.jpg",
    },
  ]);

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
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
}
