import { formatMoney } from "../../utils"
import { type ProductType } from '@/ui/types'

type ProductListItemDescriptionProps = {
    product: ProductType
}

export const ProductListItemDescription = ({
    product: {title, category, price
}}: ProductListItemDescriptionProps) => {
    return (
        <div className="mt-2">
            <div className="flex flex-row justify-between">
                <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
                <p className="small-caps text-sm font-medium text-slate-900" data-testid="product-price">{formatMoney(price/100)}</p>
            </div>
            <div className="mt-1 flex flex-row justify-between">
                <p className="text-sm text-slate-500">{category}</p>
            </div>
        </div>
    )
}