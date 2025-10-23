import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import api from "../../api/axios";
import ProductCard from "../compoents/product/ProductCard";
import { toast } from "react-toastify";
export default function Category() {
  const { id } = useParams();
  const location = useLocation();
  const categoryName = location.state?.categoryName || "Products";
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await api.get(`/products/category/${id}`);
        setProducts(res.data);
      } catch (error) {
        toast.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, [id]);


  return (
    <div className="mx-5 sm:mx-10 md:mx-15 lg:mx-20">
      <h1 className="text-3xl font-bold my-5">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}