export type ProductType = {
	id: string;
	title: string;
	price: number;
	description?: string;
	category: string;
	images: ProductImageType[];
};

export type ProductImageType = {
	src: string;
	alt: string;
};