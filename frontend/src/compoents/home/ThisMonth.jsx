import { useEffect} from "react";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../slices/productSlice";
import SectionName from "../SectionName";
import ProductCard from "../product/ProductCard";

export default function ThisMonth({ limit,title }) {
  const {products,loading,error} = useSelector((state)=>state.products)
  const dispatch = useDispatch()
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
    <div className="m-5 sm:mx-10 md:mx-15 lg:mx-20">
    <SectionName section={title}/>
    <div className="flex justify-between items-center mr-10">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
    {limit && (
        <div className="flex justify-center">
          <button
            className="bg-[#DB4444] font-semibold text-white rounded px-8 py-4 cursor-pointer"
            onClick={handleClick}
          >
            View All
          </button>
        </div>
      )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
        {visibleProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      {error&& (
        <div>{error}</div>
      )}
    </div>
  );
}