import CartItems from './CartItems';
import { useCartContext } from '../../store/cartContext';

export default function Cart() {
	const { items } = useCartContext();

	const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

	return (
		<div id="cart">
			{items.length === 0 && <p>No items in cart!</p>}
			{items.length > 0 && <CartItems items={items} />}
			<p id="cart-total-price">
				Cart Total: <strong>{formattedTotalPrice}</strong>
			</p>
		</div>
	);
}
