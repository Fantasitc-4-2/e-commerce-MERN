import WishedProductCard from "./WishedProductCard";
const ProductsRow = ({ products }) => {
  return (
    <div className=" mb-30  gap-10 container mx-auto flex  flex-col w-auto">
      <div className=" flex justify-between   ">
        <p className="text-black font-medium">Wishlist (4)</p>
        <button className="border border-black px-8  py-3 text-sm font-bold hover:bg-black hover:text-white cursor-pointer transition delay-50">
          Move All To Bag
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {products.map((product) => (
          <WishedProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsRow;
