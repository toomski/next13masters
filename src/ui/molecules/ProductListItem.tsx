import {ProductCoverImage} from '@/ui/atoms/ProductCoverImage'
import {ProductListItemDescription} from '@/ui/atoms/ProductListItemDescription'

import { ActiveLink } from '@/ui/atoms/ActiveLink'
import { type ProductListItemFragment } from '@/gql/graphql'

type ProductListItemProps = {
    product: ProductListItemFragment
}

export const ProductListItem = ({product}: ProductListItemProps) => {
    return (
        <li>
            <ActiveLink href={`/product/${product.id}`} prefetch="onHover">
              <article className='flex flex-col h-full justify-between'>
                <ProductCoverImage src={product.images[0]?.url} alt={product.name} />
                <ProductListItemDescription product={product} />
              </article>
            </ActiveLink>
          </li>
    )

}