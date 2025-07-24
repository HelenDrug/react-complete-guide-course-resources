import type {CartItemType} from "../../types";
import type {ReactElement} from "react";
import Button from "../UI/Button";
import {formatCurrency} from "../../util/formatCurrency";

interface CartItemProps {
    cartItem: CartItemType,
    onIncrease: () => void,
    onDecrease: () => void
}

export default function CartItem({cartItem, onIncrease, onDecrease}: CartItemProps): ReactElement {
    const {name, quantity, price} = cartItem;

    return (
        <li className="cart-item">
            <p>{name}- {quantity} x {formatCurrency(price)}</p>
            <p className="cart-item-actions">
                <Button onClick={onDecrease}>-</Button>
                <span>{quantity}</span>
                <Button onClick={onIncrease}>+</Button>
            </p>
        </li>
    )
}