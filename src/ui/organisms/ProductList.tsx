import { ProductListItem } from "../molecules/ProductListItem"
import { type ProductType } from "../types"

type ProductListItemProps = {
    products: ProductType[] 
}

export const ProductList = ({products = []}: ProductListItemProps) => {
    return (
        <ul data-testid="products-list" className='mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {products.map((product) => {
            return (
              <ProductListItem key={product.id} product={product} />
            )
          })}
        </ul>
    )
}
