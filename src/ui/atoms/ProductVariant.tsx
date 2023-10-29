import { ProductItemFragment } from "@/gql/graphql"
import { ActiveLink } from "./ActiveLink"

type ProductVariantProps = {
    product: ProductItemFragment
}

export const ProductVariant = ({product}: ProductVariantProps) => {
    return (
        <div className="flex flex-col flex-nowrap gap-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-sky rounded-lg">
            {product.variants.map((variant) => ((
                    <ActiveLink href={`/product/${variant?.id}`}>
                        <div className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm dark:bg-slate-700 dark:text-slate-200 dark:border-transparent">
                            {variant.name}
                        </div>
                    </ActiveLink>      
                )))}
        </div>
    )
}