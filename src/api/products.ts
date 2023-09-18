import { type ProductItemType } from "../ui/types"

interface ProductResponseItem {
    id: string
    title: string
    price: number
    description: string
    category: string
    rating: {
        rate: number
        count: number
    }
    image: string
    longDescription: string
}

interface getProductsListArgs {
    pageNumber?: number
}

export const getProductsList = async (args: getProductsListArgs): Promise<ProductItemType[]> => {
      
      const offset = args.pageNumber ? args.pageNumber - 1 : 0;
      const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=20&offset=${offset}`);
      const productsResponse = (await res.json()) as ProductResponseItem[];
    
      return productsResponse.map(productResponseItemToProductItemType);
}

export const getProductById = async (id: ProductItemType['id']): Promise<ProductItemType> => {

    const res = await fetch("https://naszsklep-api.vercel.app/api/products/" + id);
    const productResponse = (await res.json()) as ProductResponseItem;

    return productResponseItemToProductItemType(productResponse);
}

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
    return {
        id: product.id,
        name: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        coverImage: {
          src: product.image,
          alt: product.title,
        }
      }
}