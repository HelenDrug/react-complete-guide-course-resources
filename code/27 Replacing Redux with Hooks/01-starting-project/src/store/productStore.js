import {initStore} from "./store";
import {Products} from "../context/productsContext";

export const configureProductStore = () => {
    const productActions = {
        toggleFavProduct: (curState, productId) => {
            const prodIndex = curState.products.findIndex(p => p.id === productId);
            if (prodIndex === -1) {
                // Product not found, do not update
                return { products: curState.products };
            }
            const newFavStatus = !curState.products[prodIndex].isFavorite;
            const updatedProducts = [...curState.products];
            updatedProducts[prodIndex] = {
                ...curState.products[prodIndex],
                isFavorite: newFavStatus
            };
            return { products: updatedProducts };
        },
    };
    initStore(productActions, {products: Products} )
}