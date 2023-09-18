export default async function CategoryProductsPage ({ params }: {params: {category: string, pageNumber: string}}) {
  return (
      <>
        <h1>Produkty z kategorii {params.category} dla strony {params.pageNumber}</h1>
      </>
  )
}

export async function generateStaticParams({params}:{params: {category: string}}) {

    if (params.category === 't-shirts') {
        return [{pageNumber: '1'}, {pageNumber: '2'}]
    }

    if (params.category === 'boots') {
        return [{pageNumber: '1'}]
    }

	return []
}