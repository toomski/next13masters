import { type ProductItemType } from "../types"
import { formatMoney } from "@/utils"

type ProductListItemDescriptionProps = {
    product: ProductItemType
}

export const ProductListItemDescription = ({
    product: {name, category, price
}}: ProductListItemDescriptionProps) => {
    return (
        <div className="mt-2">
            <div className="flex flex-row justify-between">
                <h3 className="text-sm font-semibold text-slate-700">{name}</h3>
                <p className="small-caps text-sm font-medium text-slate-900" data-testid="product-price">{formatMoney(price/100)}</p>
            </div>
            <div className="mt-1 flex flex-row justify-between">
                <p className="text-sm text-slate-500">{category}</p>
            </div>
        </div>
    )
}