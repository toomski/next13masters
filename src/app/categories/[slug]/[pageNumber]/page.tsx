import { notFound } from "next/navigation"
import { ProductList } from "@/ui/organisms/ProductList"
import { getCategories } from "@/api/categories"
import { getProductsGetListBySlug } from "@/api/products"
import { Pagination } from "@/ui/atoms/Pagination"

type Params = {
	slug: string; 
	pageNumber: string
}

export default async function CategoryProductsPage({
	params: { slug, pageNumber },
}: {
	params: Params
}) {
	const {products, count} = await getProductsGetListBySlug({ slug, count: 4, offset: parseInt(pageNumber) })

	if (!products) {
		throw notFound()
	}

	return (
		<>
			<ProductList products={products} />
			<Pagination route={`/categories/${slug}`} count={count} />
		</>
	)
}


export async function generateStaticParams() {

    const { categories } = await getCategories()

	const pageParams: Params[] = [] 

	for ( const {slug, products} of categories ) {
		const pages = Math.floor((products.length + 1) / 4)
		new Array(pages).fill({slug}).forEach((page, pageNumber) => {
			return pageParams.push({...page, pageNumber: (pageNumber + 1).toString()} as Params)
		})
	}

    return pageParams
}
