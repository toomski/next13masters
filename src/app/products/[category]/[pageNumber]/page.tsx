import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsGetListBySlug } from "@/api/products";

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsGetListBySlug({ slug: params.category });

	if (!products) {
		throw notFound();
	}

	return <ProductList products={products} />;
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
