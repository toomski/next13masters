import { formatMoney } from "@/utils"
import { type ProductListItemFragment } from "@/gql/graphql"

type ProductListItemDescriptionProps = {
    product: ProductListItemFragment
}

export const ProductListItemDescription = ({product}: ProductListItemDescriptionProps) => {
    return (
        <div className="mt-2">
            <div className="flex flex-row justify-between">
                <h3 className="text-sm font-semibold text-slate-700">
                    {product.name}
                </h3>
                <p className="small-caps text-sm font-medium text-slate-900" data-testid="product-price">
                    {formatMoney(product.price/100)}
                </p>
            </div>
            {product.categories.length > 0 && (
                <div className="mt-1 flex flex-row justify-between">
                    <p className="text-sm text-gray-900">
                        {product.categories[0]?.name}
                    </p>
                </div>
            )}
        </div>
    )
}