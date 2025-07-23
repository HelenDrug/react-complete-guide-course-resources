import type {CartItemType} from "../../types";
import type {ReactElement} from "react";

interface CartItemProps {
    cartItem: CartItemType
}
export default function CartItem({cartItem}: CartItemProps ): ReactElement{
    return(
        <li>
            {cartItem.name}- {cartItem.quantity}
        </li>
    )
}