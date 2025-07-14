import { useRef } from 'react';

import CartModal from './cart/CartModal';
import { useCartContext } from '../store/cartContext';

export default function Header() {
	const modal = useRef<{ open: () => void }>(null);

	const { items } = useCartContext();

	function handleOpenCartClick() {
		modal.current?.open();
	}

	let modalActions = <button>Close</button>;

	if (items.length > 0) {
		modalActions = (
			<>
				<button>Close</button>
				<button>Checkout</button>
			</>
		);
	}

	return (
		<>
			<CartModal ref={modal} title="Your Cart" actions={modalActions} />
			<header id="main-header">
				<div id="main-title">
					<img src="logo.png" alt="Elegant model" />
					<h1>Elegant Context</h1>
				</div>
				<p>
					<button onClick={handleOpenCartClick}>Cart ({items.length})</button>
				</p>
			</header>
		</>
	);
}
