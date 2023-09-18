import { getProductsList } from '@/api/products';
import { Pagination } from '@/ui/atoms/Pagination';
import { ProductList } from '@/ui/organisms/ProductList';

type ProductsPageProps = {
  params: {
    pageNumber: number;
  }
}

export default async function ProductsPage ({params}: ProductsPageProps) {
  const products = await getProductsList({pageNumber: params.pageNumber});
  return (
      <>
        <ProductList products={products} />
        <Pagination items={['/products/1','/products/2', '/products/3']} />
      </>
  )
}