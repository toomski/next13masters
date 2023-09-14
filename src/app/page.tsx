import {ProductList} from '../ui/organisms/ProductList'
import { type ProductItemType } from '../ui/types';

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

export default function Home() {
  return (
    <section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
        <ProductList products={products} />
    </section>
  )
}
