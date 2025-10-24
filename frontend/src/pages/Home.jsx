import ProductGrid from "../compoents/product/ProductGrid";
import CategoryComp from "../compoents/home/CategoryComp";
// import FlashSale from "../compoents/home/FlashSale";
import AdComp from "../compoents/home/AdComp";
import CategoryImgs from "../compoents/home/CategoryImgs";
import ThisMonth from "../compoents/home/ThisMonth";
import HorizDivider from "../compoents/divider/HorizDivider";
import VerticalDivider from "../compoents/divider/VerticalDivider";
import AdGroupComp from "../compoents/home/AdGroupComp";
import Services from "../compoents/home/Services";

export default function Home() {
  return (
    <div className="lg:mx-20">
    <div className=" lg:grid lg:grid-cols-5">
    <div className="flex justify-around">
    <CategoryComp />
    <div className="hidden lg:flex">
    <VerticalDivider />
    </div>   
    </div>
    <AdComp title="IPhone 17" section="NEW ARRIVEL" img="iphone17.png" color="#FB7F33"/>
    </div>
    <div className="p-3">
  <ProductGrid limit={5} section="Tody's" />

  <HorizDivider />
      <CategoryImgs />
      <HorizDivider />
      <ThisMonth limit={5} title="This Month"/>
      </div>
      <div className="hidden md:block">
      <AdComp  title="Category" section="Enhance Your Music Experience" color="green" img="jbl.png" height={500} />
    </div>
      <ProductGrid section="Our Products" title="Expoler Our Products" limit={10}/>
      <AdGroupComp />
      <HorizDivider />
      <Services />
    </div>
  );
}
