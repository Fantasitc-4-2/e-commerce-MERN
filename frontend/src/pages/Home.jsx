import ProductGrid from "../compoents/ProductGrid";
import CategoryComp from "../compoents/CategoryComp";
import AdComp from "../compoents/AdComp";
import CategoryImgs from "../compoents/CategoryImgs";
import DividerComp from "../compoents/dividerComp";

export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-3">
    <CategoryComp />
    <AdComp />
    </div>
      <ProductGrid limit={4} />
      <DividerComp />
      <CategoryImgs />
    </div>
  );
}
