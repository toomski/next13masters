import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

export const SuggestedProductsList = async () => {
	const {products} = await getProductsList({count: 10, offset: 1});
	return (
		<section data-testid="related-products" className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products.slice(-4)} />
		</section>
	);
};
