import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../../api/axios";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../slices/productSlice";
import LoadingSpinner from "../LoadingSpinner";

export default function CategoryComp() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: selectedId } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const res = await api.get("/categories");
        setCategories(res.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedId) {
      dispatch(getAllProducts({ category: selectedId }));
    }
  }, [selectedId, dispatch]);

    const handleAllProducts = () => {
    dispatch(getAllProducts({}));
    navigate("/products");
  }
  const handleClick = (categoryId) => {
    dispatch(getAllProducts({ category: categoryId }));
    navigate(`/products/category/${categoryId}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:flex lg:flex-col">
      <div
        onClick={handleAllProducts}
        className={`p-2 cursor-pointer hover:bg-gray-50 rounded transition-all duration-300 
          ${!selectedId ? 'bg-gray-50 font-medium text-[#DB4444]' : ''}`}
      >
        All Products
      </div>
      {categories.map((category) => (
        <div
          onClick={() => handleClick(category._id)}
          key={category._id}
          className={`p-2 cursor-pointer hover:bg-gray-50 rounded transition-all duration-300
            ${selectedId === category._id ? 'bg-gray-50 font-medium text-[#DB4444]' : ''}`}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}
