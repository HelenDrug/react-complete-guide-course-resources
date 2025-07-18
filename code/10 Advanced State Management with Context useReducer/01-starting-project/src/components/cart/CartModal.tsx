import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import type { ForwardedRef, ReactNode } from 'react';

interface CartModalProps {
	title: string;
	actions: ReactNode;
}

const CartModal = forwardRef(function Modal(
	{ title, actions }: CartModalProps,
	ref: ForwardedRef<{ open: () => void }>
) {
	const dialog = useRef<HTMLDialogElement>(null);

	useImperativeHandle(ref, () => {
		return {
			open: () => {
				dialog.current?.showModal();
			},
		};
	});

	return createPortal(
		<dialog id="modal" ref={dialog}>
			<h2>{title}</h2>
			<Cart />
			<form method="dialog" id="modal-actions">
				{actions}
			</form>
		</dialog>,
		document.getElementById('modal') as HTMLElement
	);
});

export default CartModal;
