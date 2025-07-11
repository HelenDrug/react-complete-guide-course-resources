import { type ReactElement, useState } from 'react';

import Header from './components/Header';
import Shop from './components/Shop';
import { DUMMY_PRODUCTS } from './dummy-products';
import type { ShoppingCart } from './types';

function updateExistingCartItem(
	items: ShoppingCart['items'],
	index: number
): ShoppingCart['items'] {
	const updatedItems = [...items];
	const existingCartItem = updatedItems[index];
	updatedItems[index] = {
		...existingCartItem,
		quantity: existingCartItem.quantity + 1,
	};
	return updatedItems;
}

function addNewProductToCart(items: ShoppingCart['items'], id: string): ShoppingCart['items'] {
	const product = DUMMY_PRODUCTS.find((product) => product.id === id);
	if (!product) return items;
	return [
		...items,
		{
			id: product.id,
			name: product.title,
			price: product.price,
			quantity: 1,
		},
	];
}

function updateCartItemQuantity(
	items: ShoppingCart['items'],
	productId: string,
	amount: number
): ShoppingCart['items'] {
	const updatedItems = [...items];
	const itemIndex = updatedItems.findIndex((item) => item.id === productId);
	if (itemIndex === -1) return updatedItems;
	const updatedItem = { ...updatedItems[itemIndex] };
	updatedItem.quantity += amount;
	if (updatedItem.quantity <= 0) {
		updatedItems.splice(itemIndex, 1);
	} else {
		updatedItems[itemIndex] = updatedItem;
	}
	return updatedItems;
}

export default function App(): ReactElement {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
		items: [],
	});

	function handleAddItemToCart(id: string) {
		setShoppingCart((prevShoppingCart) => {
			const updatedItems = [...prevShoppingCart.items];
			const existingCartItemIndex = updatedItems.findIndex((cartItem) => cartItem.id === id);
			if (existingCartItemIndex !== -1) {
				return {
					items: updateExistingCartItem(updatedItems, existingCartItemIndex),
				};
			} else {
				return {
					items: addNewProductToCart(updatedItems, id),
				};
			}
		});
	}

	function handleUpdateCartItemQuantity(productId: string, amount: number) {
		setShoppingCart((prevShoppingCart) => ({
			items: updateCartItemQuantity(prevShoppingCart.items, productId, amount),
		}));
	}

	return (
		<>
			<Header cart={shoppingCart} onUpdateCartItemQuantity={handleUpdateCartItemQuantity} />
			<Shop onAddItemToCart={handleAddItemToCart} />
		</>
	);
}
