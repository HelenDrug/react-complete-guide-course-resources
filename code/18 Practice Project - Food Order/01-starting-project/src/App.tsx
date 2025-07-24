import Header from "./components/Header";
import type {ReactElement} from "react";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContext";
import UserProgressContextProvider from "./store/UserProgressContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout";

export default function App(): ReactElement {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header/>
                <Meals/>
                <Cart/>
                <Checkout/>
            </CartContextProvider>
        </UserProgressContextProvider>

    );
};

