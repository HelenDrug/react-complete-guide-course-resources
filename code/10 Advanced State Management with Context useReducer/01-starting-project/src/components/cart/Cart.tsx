import type { CartItemType } from '../../types';
import CartItems from './CartItems';

interface CartProps {
	items: CartItemType[];
	onUpdateItemQuantity: (id: string, amount: number) => void;
}

export default function Cart({ items, onUpdateItemQuantity }: CartProps) {
	const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

	return (
		<div id="cart">
			{items.length === 0 && <p>No items in cart!</p>}
			{items.length > 0 && (
				<CartItems items={items} onUpdateItemQuantity={onUpdateItemQuantity} />
			)}
			<p id="cart-total-price">
				Cart Total: <strong>{formattedTotalPrice}</strong>
			</p>
		</div>
	);
}
