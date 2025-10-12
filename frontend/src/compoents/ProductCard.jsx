import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function ProductCard({ image, title, price, id }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    navigate(`products/${id}`);
  };
  const handleFocus = () => {
    setHovered(true);
  };
  const handleBlur = () => {
    setHovered(false);
  };
  return (
    <div
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className="flex flex-col mt-20 justify-between w-full h-120 max-w-sm border border-gray-200 rounded-lg "
    >
      <Link to={`/products/${id}`}>
        <div>
          <img
            className="p-8 rounded-t-lg h-90 w-[100%]"
            src={"product-1.jpg"}
            alt={title}
          />
        </div>
      </Link>
      <div className="m-2">
        <p className="text-red-500">${price}</p>
        <h5 className="text-xl font-semibold tracking-tight">{title}</h5>
        
          <button
            onClick={handleClick}
            className={`bg-black p-2 rounded text-white w-[100%] transition-all duration-300 ${hovered?"opacity-100 translate-y-0":"opacity-0 translate-y-3 pointer-events-none"}`}
          >
            Add To Cart{" "}
          </button>
      </div>
    </div>
  );
}
