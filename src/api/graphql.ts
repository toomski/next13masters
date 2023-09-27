import { type GraphQLResponse } from "@/types/GraphQLResponse";
import { type TypedDocumentString } from "@/gql/graphql";

export async function executeGraphql<TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/jso n",
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		const errorMessage = graphqlResponse.errors[0] ? graphqlResponse.errors[0].message : "";
		throw TypeError(`GraphQL Error: ${errorMessage}`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
}