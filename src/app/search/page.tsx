import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsGetListBySearch } from "@/api/products";

export default async function SearchPage({
    searchParams: { query }
}: {
    searchParams: { query: string }
}) {
    
    const { products } = await getProductsGetListBySearch({search: query || ''})

    if (!products) {
		throw notFound()
	}

    return (
        <>
			<ProductList products={products} />
		</>
    )
}