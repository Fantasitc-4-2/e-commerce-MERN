import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../slices/productSlice";
import SectionName from "./SectionName";
import ProductCard from "./ProductCard";

export default function ProductGrid({ limit, title }) {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const handleClick = () => {
    navigate("/products");
  };
  const visibleProducts = limit ? products.slice(0, limit) : products;
  if (loading) return <LoadingSpinner />;
  return (
    <div>
      <SectionName section={title} />
      <div className="grid grid-cols-4 m-5 gap-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      {limit && (
        <div className="flex justify-center my-8">
          <button
            className="bg-[#DB4444] font-semibold text-white rounded px-8 py-4 cursor-pointer"
            onClick={handleClick}
          >
            All Products
          </button>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}
