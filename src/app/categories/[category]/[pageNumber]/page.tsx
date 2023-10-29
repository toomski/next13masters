import { notFound } from "next/navigation"
import { ProductList } from "@/ui/organisms/ProductList"
import { getProductsGetListBySlug } from "@/api/products"
import { Pagination } from "@/ui/atoms/Pagination"

export default async function CategoryProductsPage({
	params: { category, pageNumber },
}: {
	params: { category: string; pageNumber: string }
}) {
	const {products, count} = await getProductsGetListBySlug({ slug: category, count: 4, offset: parseInt(pageNumber) })

	if (!products) {
		throw notFound()
	}

	return (
		<>
			<ProductList products={products} />
			<Pagination route={`/categories/${category}`} count={count} />
		</>
	)
}

export async function generateStaticParams({ params }: { params: { category: string } }) {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	}

	if (params.category === "boots") {
		return [{ pageNumber: "1" }];
	}

	return [];
}
