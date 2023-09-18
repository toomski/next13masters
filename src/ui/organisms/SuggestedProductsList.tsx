import { ProductList } from "./ProductList"
import { getProductsList } from "@/api/products"

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
    const products = await getProductsList({pageNumber: 0});
    // await sleep(5000);
    return (
        <ProductList products={products.slice(-4)} />
    )
}