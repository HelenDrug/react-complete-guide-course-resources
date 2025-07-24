import {createContext, type ReactNode, useReducer} from "react";
import type {CartAction, CartContextType, CartItemType, CartState} from "../types";


export const CartContext = createContext<CartContextType>({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

interface CartContextProviderProps {
    children: ReactNode;
}

function cartReducer(state: CartState, action: CartAction): CartState {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item?.id
        );
        let updatedItems;
        if (existingCartItemIndex > -1) {
            updatedItems = state.items.map((item, idx) =>
                idx === existingCartItemIndex
                    ? {...item, quantity: item.quantity + 1}
                    : item
            );
        } else {
            if (!action.item?.id) {
                return state;
            }
            updatedItems = [...state.items, {...action.item, quantity: 1}];
        }

        return {...state, items: updatedItems};
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.itemId
        );

        if (existingCartItemIndex === -1) {
            return state;
        }

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;
        if (existingCartItem.quantity === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.itemId);
        } else {
            updatedItems = state.items.map((item, idx) =>
                idx === existingCartItemIndex
                    ? {...item, quantity: item.quantity - 1}
                    : item
            );
        }

        return {...state, items: updatedItems};
    }
    if( action.type === 'CLEAR_CART') {
        return {items: []};
    }
    return state;
}

export default function CartContextProvider({children}: CartContextProviderProps): ReactNode {

    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});
    const cartContext = {
        items: cart.items,
        addItem: (item: CartItemType) => {
            dispatchCartAction({type: 'ADD_ITEM', item});
        },
        removeItem: (itemId: string) => {
            dispatchCartAction({type: 'REMOVE_ITEM', itemId});
        },
        clearCart: () => {
            dispatchCartAction({type: 'CLEAR_CART'});
        }
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}