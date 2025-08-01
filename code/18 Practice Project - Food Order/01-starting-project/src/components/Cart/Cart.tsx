import Modal from "../UI/Modal";
import {type ReactElement, useContext} from "react";
import {CartContext} from "../../store/CartContext";
import CartItem from "./CartItem";
import {formatCurrency} from "../../util/formatCurrency";
import Button from "../UI/Button";
import {UserProgressContext} from "../../store/UserProgressContext";

export default function Cart(): ReactElement {
    const cartContext = useContext(CartContext)
    const {items, addItem, removeItem} = cartContext;

    const progressContext = useContext(UserProgressContext);
    const {progress, hideCart, showCheckout} = progressContext;

    const cartTotal = items.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2)

    return (<Modal open={progress === 'cart'} classname="cart" onClose={progress === 'cart' ? hideCart : undefined}>
            <h2>Your Cart</h2>
            <ul>
                {items.map(item =>
                    <CartItem
                        key={item.id}
                        cartItem={item}
                        onIncrease={() => addItem(item)}
                        onDecrease={() => removeItem(item.id)}/>)}
            </ul>
            <p className="cart-total">{formatCurrency(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={hideCart}>Close </Button>
                {items.length > 0 && <Button onClick={showCheckout}>Checkout</Button>}
            </p>
        </Modal>
    )
}