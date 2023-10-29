import { executeGraphql } from "@/api/graphql";

import { CategoriesGetListDocument } from '@/gql/graphql'

export const getCategories = async () => {
    
    const graphqlResponse = await executeGraphql(CategoriesGetListDocument, {})

    const categories = graphqlResponse.categories

    return { categories }

}