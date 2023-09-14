import {ProductList} from '../../ui/organisms/ProductList'
import { type ProductItemType } from '../../ui/types';

const products: ProductItemType[] = [
    {
      id: '1',
      name: 'Unisex Long Sleeve Tee',
      category: `T-shirts`,
      price: 1999,
      coverImage: {
        src: 'product_1.png',
        alt: 'Product 1',
      }
    },
    {
      id: '2',
      name: 'Snapback',
      category: `Accessories`,
      price: 1299,
      coverImage: {
        src: 'product_2.png',
        alt: 'Product 2',
      }
    },
    {
      id: '3',
      name: 'Unisex Zip Hoodie',
      category: `Hoodies`,
      price: 4999,
      coverImage: {
        src: 'product_3.png',
        alt: 'Product 3',
      }
    },
    {
      id: '4',
      name: 'Unisex Zip Hoodie',
      category: `Hoodies`,
      price: 4999,
      coverImage: {
        src: 'product_4.png',
        alt: 'Product 4',
      }
    }
  ];

export default function ProductsPage () {
    return (
        <ProductList products={products} />
    )
}