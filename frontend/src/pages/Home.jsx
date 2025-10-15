import ProductGrid from "../compoents/ProductGrid";
import CategoryComp from "../compoents/CategoryComp";
import AdComp from "../compoents/AdComp";
import CategoryImgs from "../compoents/CategoryImgs";
import ThisMonth from "../compoents/ThisMonth";
import HorizDivider from "../compoents/HorizDivider";
import VerticalDivider from "../compoents/VerticalDivider";
import RelatedProductCard from "../compoents/RelatedProductCard";

export default function Home() {
  return (
    <div className="mx-10">
    <div className="grid grid-cols-5">
    <div className="flex justify-around">
    <CategoryComp />
    <VerticalDivider />   
    </div>
    <AdComp title="IPhone 17" section="NEW ARRIVEL" img="iphone17.png" color="#FB7F33"/>
    </div>
    <div className="p-3 m-20">
      <ProductGrid limit={4} title="Today's"/>
      <HorizDivider />
      <CategoryImgs />
      <HorizDivider />
      <ThisMonth limit={4} title="This Month"/>
      </div>

      <AdComp  title="Category" section="Enhance Your Music Experience" color="green" img="jbl.png" height={500}  />
    </div>
  );
}
