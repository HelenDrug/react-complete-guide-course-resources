import { createContext, type ReactNode, useContext, useState } from 'react';
import type { CartItemType, ShoppingCart } from '../types';
import { DUMMY_PRODUCTS } from '../dummy-products';

interface CartContextProps {
	items: CartItemType[];
	addItemToCart: (value: string) => void;
	updateItemQuantity: (id: string, amount: number) => void;
}

const noop = () => {};
export const CartContext = createContext<CartContextProps>({
	items: [] as CartItemType[],
	addItemToCart: noop,
	updateItemQuantity: noop,
});

export const useCartContext = (): CartContextProps => useContext(CartContext);

// Utility functions
function updateExistingCartItem(
	items: ShoppingCart['items'],
	index: number
): ShoppingCart['items'] {
	const updatedItems = [...items];
	const existingCartItem = updatedItems[index];
	updatedItems[index] = {
		...existingCartItem,
		quantity: existingCartItem.quantity++,
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

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({ items: [] });

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
		<CartContext.Provider
			value={{
				items: shoppingCart.items,
				addItemToCart: handleAddItemToCart,
				updateItemQuantity: handleUpdateCartItemQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
