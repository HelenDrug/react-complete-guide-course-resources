export interface MealType {
    id: string,
    name: string,
    price: string,
    description: string,
    image: string
}

export interface CartItemType extends MealType {
    quantity: number;
}
export interface CartState {
    items: CartItemType[];
}
export interface CartAction {
    type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_CART';
    item?: CartItemType;
    itemId?: string;
}

export interface CartContextType {
    items: CartItemType[];
    addItem: (item: CartItemType) => void;
    removeItem: (itemId: string) => void;
    clearCart: () => void;
}

export type UserProgress = (
    'cart' | 'checkout' | ''
    )
export interface UserProgressContextType {
    progress: UserProgress;
    showCart: () => void;
    hideCart: () => void;
    showCheckout: () => void;
    hideCheckout: () => void;
}

export interface Customer {
    fullName: string;
    email: string;
    street: string;
    postalCode: string;
    city: string;
}

export interface Order{
    customer: Customer;
    items: CartItemType[];
}