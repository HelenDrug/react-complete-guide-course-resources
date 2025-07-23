import {type ReactElement, useContext} from "react";
import Button from "./UI/Button";
import {CartContext} from "../store/CartContext";
import {UserProgressContext} from "../store/UserProgressContext";

export default function Header(): ReactElement {
    const cartContext = useContext(CartContext)
    const progressContext = useContext(UserProgressContext);

    const totalCartItems = cartContext.items.reduce((total, item) => total + item.quantity, 0);
    return (
        <header id="main-header">
            <div id="title">
                <img src="/logo.jpg" alt='Logo'/>
                <h1>Meals</h1>
            </div>
            <nav>
                <Button textOnly onClick={progressContext.showCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}