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
    <div className="grid grid-cols-5 my-1">
    <div className="flex justify-around">
    <CategoryComp />
    <VerticalDivider />   
    </div>
    <AdComp title="I Phone 17" section="NEW ARRIVEL" img="iphone17.png"/>
    
    </div>
    <div className="p-3 m-20">
      <ProductGrid limit={4} title="Today's"/>
      <HorizDivider />
      <CategoryImgs />
      <HorizDivider />
      <ThisMonth limit={4} title="This Month"/>
      </div>
      <AdComp  title="I Phone 17" section="NEW ARRIVEL" img="iphone17.png" grid="4" className="my-20"/>
    </div>
  );
}
