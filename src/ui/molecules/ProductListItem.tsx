import {ProductCoverImage} from '@/ui/atoms/ProductCoverImage'
import {ProductListItemDescription} from '@/ui/atoms/ProductListItemDescription'

import { type ProductType } from '@/ui/types'
import { ActiveLink } from '@/ui/atoms/ActiveLink'

type ProductListItemProps = {
    product: ProductType
}

export const ProductListItem = ({product}: ProductListItemProps) => {
    return (
        <li>
            <ActiveLink href={`/product/${product.id}`} prefetch="onHover">
              <article className='flex flex-col h-full justify-between'>
                <ProductCoverImage {...product.images[0]} />
                <ProductListItemDescription product={product} />
              </article>
            </ActiveLink>
          </li>
    )

}