import { useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../slices/productSlice";
import SectionName from "../SectionName";
import ProductCard from "./ProductCard"

export default function ProductGrid({ limit, title ,section}) {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts({ page: 1, limit: 50 }));
  }, [dispatch]);
  const handleClick = () => {
    navigate("/products");
  };
  const visibleProducts = limit ? products.slice(0, limit) : products;
  if (loading) return <LoadingSpinner />;
  return (
    <div className="m-5 sm:m-10 md:mx-15 lg:mx-20">
      <SectionName section={section} title={title}  />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
        {visibleProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      {limit && (
        <div className="flex justify-center my-8">
          <button
            className="bg-[#DB4444] font-semibold text-white rounded px-12 py-4 cursor-pointer"
            onClick={handleClick}
          >
            View All Products
          </button>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}
