import { useEffect, useCallback } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../slices/productSlice";
import SectionName from "../SectionName";
import ProductCard from "./ProductCard";
import Pagination from "../Pagination";
import { getWishList } from "../../slices/wishListSlice";

export default function ProductGrid({ limit, title, section }) {
  const { products, loading, error, currentPage, hasMore } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadPage = useCallback((page) => {
    const pageSize = limit || 10;
    dispatch(getAllProducts({ page, limit: pageSize }));
  }, [dispatch, limit]);

  // Fetch products on mount
  useEffect(() => {
    loadPage(1);
  }, [loadPage]);

  //  Fetch wishlist ONCE when component mounts (only if user is logged in)
  useEffect(() => {
    if (user) {
      dispatch(getWishList());
    }
  }, [dispatch, user]);

  const handlePageChange = (newPage) => {
    loadPage(newPage);
    // Scroll to top smoothly when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAll = () => {
    navigate("/products");
  };

  // If we're using limit prop (e.g., on home page), slice the products
  const visibleProducts = limit ? products.slice(0, limit) : products;
  
  if (loading && products.length === 0) return <LoadingSpinner />;

  return (
    <div className="m-5 sm:m-10 md:mx-15 lg:mx-20">
      <SectionName section={section} title={title} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
        {visibleProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
        {loading && <LoadingSpinner />}
      </div>

      {!limit && products.length > 0 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          hasMore={hasMore}
        />
      )}

      {limit && products.length >= limit && (
        <div className="flex justify-center my-8">
          <button
            className="bg-[#DB4444] font-semibold text-white rounded px-12 py-4 cursor-pointer"
            onClick={handleViewAll}
          >
            View All Products
          </button>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center my-4">Error: {error}</div>
      )}
    </div>
  );
}