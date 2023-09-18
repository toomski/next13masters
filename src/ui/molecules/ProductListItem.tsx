import {ProductCoverImage} from '@/ui/atoms/ProductCoverImage'
import {ProductListItemDescription} from '@/ui/atoms/ProductListItemDescription'

import { type ProductItemType } from '@/ui/types'
import { ActiveLink } from '@/ui/atoms/ActiveLink'

type ProductListItemProps = {
    product: ProductItemType
}

export const ProductListItem = ({product}: ProductListItemProps) => {
    return (
        <li>
            <ActiveLink href={`/product/${product.id}`} prefetch="onHover">
              <article className='flex flex-col h-full justify-between'>
                <ProductCoverImage {...product.coverImage} />
                <ProductListItemDescription product={product} />
              </article>
            </ActiveLink>
          </li>
    )

}