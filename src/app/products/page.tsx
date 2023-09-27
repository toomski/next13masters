import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

export default async function ProductsPage () {

    const products = await getProductsList()

    if (!products) {
          throw notFound();
      }
  
    return (
      <ProductList products={products} />
    )
}
  