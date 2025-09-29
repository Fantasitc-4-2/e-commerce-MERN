import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

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
  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div className="grid grid-cols-4 m-5 gap-4">
      {data.map((product) => (
        <ProductCard
          title={product.title}
          img={product.img}
          description={product.description}
        />
      ))}
    </div>
  );
}
