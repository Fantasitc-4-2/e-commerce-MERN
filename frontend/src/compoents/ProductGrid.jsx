import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductGrid() {
  const products = [
    {
      id: "1",
      title: "Wireless Headphones",
      description:
        "Noise-cancelling over-ear wireless headphones with 30 hours of battery life.",
      category: "66fdc72a5b8d0a0f6c91b111",
      price: 120,
      stock: 50,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtSF57VY9AWkYavK_Qdn5I6wN0om4IO-zuw&s",
    },
    {
      id: "2",
      title: "Smartphone",
      description:
        "Latest-gen smartphone with OLED display and powerful processor.",
      category: "66fdc72a5b8d0a0f6c91b112",
      price: 899,
      stock: 30,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35c1",
    },
    {
      id: "3",
      title: "Gaming Laptop",
      description:
        "High-performance laptop designed for gaming with RTX graphics.",
      category: "66fdc72a5b8d0a0f6c91b113",
      price: 1500,
      stock: 15,
      image: "https://images.unsplash.com/photo-1612832021025-99d3a4a7d4f6",
    },
    {
      id: "4",
      title: "Office Chair",
      description:
        "Ergonomic chair with lumbar support and breathable mesh design.",
      category: "66fdc72a5b8d0a0f6c91b114",
      price: 220,
      stock: 40,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
    {
      id: "5",
      title: "Running Shoes",
      description:
        "Lightweight running shoes with cushioned sole and breathable fabric.",
      category: "66fdc72a5b8d0a0f6c91b115",
      price: 90,
      stock: 100,
      image: "https://images.unsplash.com/photo-1606813902787-52d66b0dc1c5",
    },
    {
      id: "6",
      title: "Mechanical Keyboard",
      description:
        "RGB backlit mechanical keyboard with blue switches for tactile feedback.",
      category: "66fdc72a5b8d0a0f6c91b116",
      price: 140,
      stock: 25,
      image: "https://images.unsplash.com/photo-1610395466522-5a33df5e3f39",
    },
    {
      id: "7",
      title: "Smartwatch",
      description:
        "Fitness tracking smartwatch with heart rate monitoring and GPS.",
      category: "66fdc72a5b8d0a0f6c91b117",
      price: 199,
      stock: 75,
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
    },
    {
      id: "8",
      title: "Coffee Maker",
      description: "Automatic drip coffee maker with programmable timer.",
      category: "66fdc72a5b8d0a0f6c91b118",
      price: 80,
      stock: 60,
      image: "https://images.unsplash.com/photo-1507914372361-9a4fd5f7d2bb",
    },
    {
      id: "9",
      title: "Backpack",
      description:
        "Durable travel backpack with multiple compartments and laptop sleeve.",
      category: "66fdc72a5b8d0a0f6c91b119",
      price: 70,
      stock: 90,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: "10",
      title: "DSLR Camera",
      description:
        "Professional DSLR camera with 24MP sensor and 4K video recording.",
      category: "66fdc72a5b8d0a0f6c91b11a",
      price: 1200,
      stock: 10,
      image: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2",
    },
  ];

  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/results");

  //       setProducts(res.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  // if (isLoading) return <LoadingSpinner />;
  return (
    <div className="grid grid-cols-4 m-5 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
