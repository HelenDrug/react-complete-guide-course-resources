import type { CartItemType } from '../../types';
import { useCartContext } from '../../store/cartContext';

interface CartItemProps {
	item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
	const { id, name, price, quantity } = item;

	const { updateItemQuantity } = useCartContext();
	return (
		<li>
			<div>
				<span>{name}</span>
				<span> ({`$${price.toFixed(2)}`})</span>
			</div>
			<div className="cart-item-actions">
				<button onClick={() => updateItemQuantity(id, -1)}>-</button>
				<span>{quantity}</span>
				<button onClick={() => updateItemQuantity(id, 1)}>+</button>
			</div>
		</li>
	);
}
