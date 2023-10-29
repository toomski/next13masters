import { type Metadata } from 'next'
import { Suspense } from "react";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from '@/ui/atoms/ProductCoverImage'
import { ProductListItemDescription } from '@/ui/atoms/ProductListItemDescription'
import { SuggestedProductsList } from '@/ui/organisms/SuggestedProductsList'
import { formatMoney } from "@/utils"
import { ProductVariant } from '@/ui/atoms/ProductVariant';

type ProductPageParams = {
    params: { productId: string }
}

export default async function ProductPage({ params }: ProductPageParams) {

    const product = await getProductById({id: params.productId});

	return (
        <section className="mx-auto grid max-w-7xl p-8">
            <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="px-6">
                    <ProductCoverImage src={product.images[0]?.url} alt={product.name} />
                </div>
                <div className="px-6">
                    <h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">{product.name}</h1>
                    <div className="mt-4 flex items-center">
                        <div className="font-base small-caps text-lg text-slate-800">{formatMoney(product.price/100)}</div>
                    </div>
                    <div className="mt-4 space-y-6">
                        <p className="font-sans text-base text-slate-500">{product.description}</p>
                    </div>
                    <div className="mt-4 space-y-6">
                        <ProductVariant product={product} />
                    </div>
                </div>
            </article>
            <aside>
                <Suspense fallback="Ładowanie sugerowanych produktów...">
                    <SuggestedProductsList />
                </Suspense>   
            </aside>
        </section>
    );
}

// export async function generateStaticParams() {
// 	const products = await getProductsList({pageNumber: 0}); 
// 	return products.map((product) => ({ productId: product.id }));
// }

export const generateMetadata = async ({ params }: ProductPageParams): Promise<Metadata> => {
    const product = await getProductById({id: params.productId});
    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [
                {url: product.images[0]?.url || '', alt: product.name}
            ]
        }
    }    
}