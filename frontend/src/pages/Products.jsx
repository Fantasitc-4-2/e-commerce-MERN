import ProductGrid from '../compoents/product/ProductGrid'
import CategoryComp from '../compoents/home/CategoryComp'
import VerticalDivider from '../compoents/divider/VerticalDivider'

export default function Products() {
  return (
    <div className="md:mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="flex flex-col">
          <CategoryComp />
          <div className="hidden lg:flex">
            <VerticalDivider />
          </div>
        </div>
        <div className="lg:col-span-4">
          <ProductGrid section="All Products"/>
        </div>
      </div>
    </div>
  )
}
