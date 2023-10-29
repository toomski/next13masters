import { executeGraphql } from "@/api/graphql";
import {
	ProductGetByIdDocument,
	type ProductGetByIdQueryVariables,
	ProductsGetListDocument,
	type ProductsGetListQueryVariables,
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

const parseGetList = ({ count, offset }: {count: number, offset: number}) : {count: number, offset: number}  => {
	return { count, offset: count * (offset - 1) }	
}

export const getProductsList = async ({count, offset}: ProductsGetListQueryVariables) => {

	const graphqlResponse = await executeGraphql(ProductsGetListDocument, parseGetList({count, offset}));

	return {
		products: graphqlResponse.products || [],
		count: graphqlResponse.productsConnection.aggregate.count
	};
};

export const getProductsGetListBySlug = async ({ slug, count, offset }: ProductsGetListBySlugQueryVariables) => {

	const graphqlResponse = await executeGraphql(ProductsGetListBySlugDocument, { slug, ...parseGetList({count, offset}) });


	return {
		products: graphqlResponse.products || [],
		count: graphqlResponse.productsConnection.aggregate.count
	};
};
