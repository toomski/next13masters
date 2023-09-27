import { executeGraphql } from "@/api/graphql"
import { type ProductType } from "@/ui/types"
import { 
	ProductGetByIdDocument,
	type ProductGetByIdQueryVariables,
	ProductsGetListDocument,
	ProductsGetListBySlugDocument,
	type ProductsGetListBySlugQueryVariables,
	type ProductsGetListQuery
 } from "@/gql/graphql"

export const getProductById = async ({id}: ProductGetByIdQueryVariables): Promise<ProductType> => {
	
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {id});

	const product = graphqlResponse.product;

	if (!product) {
		throw new Error(`Product with id ${id} not found`);
	}
	
	return {
		id: product.id,
		title: product.name,
		price: product.price,
		description: product.description,
		category: product.categories[0]?.name || "",
		images: product.images.map((img) => ({
			src: img.url,
			alt: product.name,
		})),
	};
}

export const getProductsList = async (): Promise<ProductType[]> => {

    const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

    return mapProducts(graphqlResponse.products);
}

export const getProductsGetListBySlug = async ({slug}: ProductsGetListBySlugQueryVariables): Promise<ProductType[]> => {

	const graphqlResponse = await executeGraphql(ProductsGetListBySlugDocument, {slug});

	return mapProducts(graphqlResponse.categories[0]?.products || []);
	
}

function mapProducts (products: ProductsGetListQuery['products']): ProductType[] {
	return products.map((product) => {
		return {
			id: product.id,
			title: product.name,
			price: product.price,
			description: product.description,
			category: product.categories[0]?.name || "",
			images: product.images.map((img) => ({
				src: img.url,
				alt: product.name,
			})),
		};
	});
}