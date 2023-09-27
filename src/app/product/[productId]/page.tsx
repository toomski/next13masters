import { type Metadata } from 'next'
import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from '@/ui/atoms/ProductCoverImage'
import { ProductListItemDescription } from '@/ui/atoms/ProductListItemDescription'
import { SuggestedProductsList } from '@/ui/organisms/SuggestedProductsList'

type ProductPageParams = {
    params: { productId: string }
}

export default async function ProductPage({ params }: ProductPageParams) {

    const product = await getProductById({id: params.productId});

	return (
        <>
            <article className="max-w-xs">
                <ProductCoverImage src={product.images[0]?.src} alt={product.images[0]?.alt} />
                <ProductListItemDescription product={product} />
            </article>
            <aside>
                <Suspense fallback="Ładowanie sugerowanych produktów...">
                    <SuggestedProductsList />
                </Suspense>   
            </aside>
        </>
    );
}

// export async function generateStaticParams() {
// 	const products = await getProductsList({pageNumber: 0}); 
// 	return products.map((product) => ({ productId: product.id }));
// }

export const generateMetadata = async ({ params }: ProductPageParams): Promise<Metadata> => {
    const product = await getProductById({id: params.productId});
    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            images: [
                {url: product.images[0]?.src || '', alt: product.images[0]?.alt || ''}
            ]
        }
    }    
}