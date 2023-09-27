import { executeGraphql } from "@/api/graphql";
import {
	ProductGetByIdDocument,
	type ProductGetByIdQueryVariables,
	ProductsGetListDocument,
	ProductsGetListBySlugDocument,
	type ProductsGetListBySlugQueryVariables,
} from "@/gql/graphql";

export const getProductById = async ({ id }: ProductGetByIdQueryVariables) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id });

	const product = graphqlResponse.product;

	if (!product) {
		throw new Error(`Product with id ${id} not found`);
	}

	return product;
};

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products;
};

export const getProductsGetListBySlug = async ({ slug }: ProductsGetListBySlugQueryVariables) => {
	const graphqlResponse = await executeGraphql(ProductsGetListBySlugDocument, { slug });

	return graphqlResponse.categories[0]?.products || [];
};
