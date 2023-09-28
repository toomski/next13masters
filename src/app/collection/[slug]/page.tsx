import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionsList, getCollectionBySlug } from "@/api/collections";
import { ProductList } from "@/ui/organisms/ProductList";

type CollectionPageParams = {
	params: { slug: string };
};

export default async function CollectionPage({ params }: CollectionPageParams) {
	const collection = await getCollectionBySlug({ slug: params.slug });

	if (!collection) {
		throw notFound();
	}

	return (
		<div>
			<div className=" bg-slate-50">
				<div className="m-auto mx-auto max-w-7xl px-8 py-12">
					<h1 className="text-3xl font-bold tracking-tight text-slate-900">{collection.name}</h1>
					<p className="mt-4 max-w-2xl text-base text-slate-700">{collection.description}</p>
				</div>
			</div>
			<div className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
				<ProductList products={collection.products} />
			</div>
		</div>
	);
}

export async function generateStaticParams() {
	const collections = await getCollectionsList();
	return collections.map((collection) => ({ slug: collection.slug }));
}

export const generateMetadata = async ({ params }: CollectionPageParams): Promise<Metadata> => {
	const collection = await getCollectionBySlug({ slug: params.slug });

	if (!collection) {
		throw notFound();
	}

	return {
		title: collection.name,
		description: collection.description || "",
		openGraph: {
			title: collection.name,
			description: collection.description || "",
			images: [{ url: collection.products[0]?.images[0]?.url || "", alt: collection.name }],
		},
	};
};
