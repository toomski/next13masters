import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/atoms/Pagination";

export default async function ProductsPage({
	params: { pageNumber },
}: {
	params: { pageNumber: string };
}) {

	const {products, count} = await getProductsList({count: 4, offset: parseInt(pageNumber)});

	if (!products) {
		throw notFound()
	}

	return (
		<>
			<ProductList products={products} />
			<Pagination route={'/products'} count={count} />
		</>
	);
}

export async function generateStaticParams() {
	return [{pageNumber: '1'}, {pageNumber: '2'}, {pageNumber: '3'}]
}