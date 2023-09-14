type ProductPageParams = {
    params: { productId: string },
    searchParams: { [key: string]: string | string[] }
}

export default function ProductPage({ params, searchParams }: ProductPageParams) {
    const refferal = searchParams.refferal.toString();
	return (
        <>
            <div>Product {params.productId}</div>
            <div>Refferal {refferal}</div>
        </>
    );
}