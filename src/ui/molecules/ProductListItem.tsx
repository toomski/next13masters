import Link from 'next/link'
import {ProductCoverImage} from '../atoms/ProductCoverImage'
import {ProductListItemDescription} from '../atoms/ProductListItemDescription'

import { type ProductItemType } from '../types'

type ProductListItemProps = {
    product: ProductItemType
}

export const ProductListItem = ({product}: ProductListItemProps) => {
    return (
        <li>
            <Link href={`/product/${product.id}`}>
            <article>
              <ProductCoverImage {...product.coverImage} />
              <ProductListItemDescription product={product} />
            </article>
            </Link>
          </li>
    )

}