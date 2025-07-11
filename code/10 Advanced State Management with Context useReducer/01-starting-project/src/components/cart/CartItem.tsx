import type { CartItemType } from '../../types';

interface CartItemProps {
	item: CartItemType;
	onUpdateItemQuantity: (id: string, amount: number) => void;
}

export default function CartItem({ item, onUpdateItemQuantity }: CartItemProps) {
	return (
		<li>
			<div>
				<span>{item.name}</span>
				<span> ({`$${item.price.toFixed(2)}`})</span>
			</div>
			<div className="cart-item-actions">
				<button onClick={() => onUpdateItemQuantity(item.id, -1)}>-</button>
				<span>{item.quantity}</span>
				<button onClick={() => onUpdateItemQuantity(item.id, 1)}>+</button>
			</div>
		</li>
	);
}
