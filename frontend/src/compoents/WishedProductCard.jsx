import { TrashIcon } from "@heroicons/react/24/outline";

const RelatedProductCard = ({ title, image }) => {
  return (
    <div className="flex flex-col w-70 gap-1 group">
      <div className="relative w-60 overflow-hidden">
        <div className="w-60 h-60 flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="h-50 transform transition-transform duration-300 group-hover:-translate-y-6"
        />
        </div>
        <TrashIcon className="absolute top-3 right-2 w-6 bg-gray-100 rounded-3xl p-1" />

        <div className="bg-[#DB4444] text-white absolute top-3 left-2 w-13 rounded text-[.7rem] text-center p-1 font-light">
          -40%
        </div>

        <button className="hover:cursor-pointer absolute bottom-[-3rem] left-0 w-full bg-black text-white py-2 text-sm font-medium transition-all duration-300 group-hover:bottom-0">
          Add to Cart
        </button>
      </div>

      <p className="font-semibold">{title}</p>
      <div className="flex gap-4">
        <p className="text-[#DB4444] font-medium">$120</p>
        <p className="text-gray-400 font-medium line-through">$160</p>
      </div>
    </div>
  );
};

export default RelatedProductCard;
