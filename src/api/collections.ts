import { executeGraphql } from "@/api/graphql";
import {
	CollectionsGetListDocument,
	CollectionGetBySlugDocument,
	type CollectionGetBySlugQueryVariables,
} from "@/gql/graphql";

export const getCollectionsList = async () => {

	const graphqlResponse = await executeGraphql(CollectionsGetListDocument, {});

	return graphqlResponse.collections;

};

export const getCollectionBySlug = async ({ slug }: CollectionGetBySlugQueryVariables) => {
	
	const graphqlResponse = await executeGraphql(CollectionGetBySlugDocument, { slug });
	
	return graphqlResponse.collections[0] || null;

};
