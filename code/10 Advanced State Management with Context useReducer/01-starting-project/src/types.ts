export interface ProductType {
	id: string;
	image: string;
	title: string;
	price: number;
	description: string;
}

export interface CartItemType {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

export interface ShoppingCart {
	items: CartItemType[];
}
