import {type FormEvent, type ReactElement, useContext} from "react";
import Modal from "./UI/Modal";
import {formatCurrency} from "../util/formatCurrency";
import {CartContext} from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import {UserProgressContext} from "../store/UserProgressContext";
import type {Customer} from "../types";
import {sendOrder} from "../api/sendOrder";

export default function Checkout(): ReactElement {
    const cartContext = useContext(CartContext);
    const {items, clearCart} = cartContext;
    const cartTotal = items.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2)

    const progressContext = useContext(UserProgressContext);
    const {progress, hideCheckout} = progressContext;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries())
        const customerData: Customer = {
            fullName: data["fullName"] as string,
            email: data["email"] as string,
            street: data["street"] as string,
            postalCode: data["postalCode"] as string,
            city: data["city"] as string,
        };
        const order = {
            customer: customerData,
            items: cartContext.items,
        }
        sendOrder(order).then(
            () => {
                clearCart();
                hideCheckout();
            }
        )
    }

    return (
        <Modal open={progress === "checkout"} classname="checkout" onClose={hideCheckout}>
            <form onSubmit={handleSubmit}>
                <h2>Check Out</h2>
                <p>Total amount :{formatCurrency(cartTotal)} </p>
                <Input label="Full Name:" id="fullName" type="text"/>
                <Input label="Email" id="email" type="email"/>
                <Input label="Street" id="street" type="text"/>
                <div className="control-row">
                    <Input label="Postal Code" id="postalCode" type="text"/>
                    <Input label="City" id="city" type="text"/>
                </div>
                <p className="modal-actions">
                    <Button textOnly onClick={hideCheckout}>Close</Button>
                    <Button type="submit">Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}