import CartItem from './CartItem';
import type { CartItemType } from '../../types';
import type { ReactElement } from 'react';

interface CartItemsProps {
	items: CartItemType[];
	onUpdateItemQuantity: (id: string, amount: number) => void;
}

export default function CartItems({
	items,
	onUpdateItemQuantity,
}: Readonly<CartItemsProps>): ReactElement {
	return (
		<ul id="cart-items">
			{items.map((item) => {
				return (
					<CartItem
						key={item.id}
						item={item}
						onUpdateItemQuantity={onUpdateItemQuantity}
					/>
				);
			})}
		</ul>
	);
}
