import ProductGrid from "../compoents/ProductGrid";
import CategoryComp from "../compoents/CategoryComp";
import AdComp from "../compoents/AdComp";
import CategoryImgs from "../compoents/CategoryImgs";
import ThisMonth from "../compoents/ThisMonth";
import HorizDivider from "../compoents/HorizDivider";
import VerticalDivider from "../compoents/VerticalDivider";

export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-3 my-1">
    <div className="col-span-1 flex justify-around">
    <CategoryComp />
    <VerticalDivider />   
    </div>
    <AdComp />
    
    </div>
    <div className="p-3 m-20">
      <ProductGrid limit={4} title="Today's"/>
      <HorizDivider />
      <CategoryImgs />
      <HorizDivider />
      <ThisMonth limit={4} title="This Month"/>
      </div>
    </div>
  );
}
