import {createContext, useState} from "react";

export const Products = [
    {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
    },
    {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
    },
    {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
    },
    {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
    }
]

export const ProductsContext = createContext({
    products: [],
    toggleFav: (id)=>{}
})
export default props => {
    const [products, setProducts] = useState(Products);

    const toggleFavourite = (productId) => {
        setProducts((currentProducts) => {
            const prodIndex = currentProducts.findIndex(p => p.id === productId);
            if (prodIndex === -1) {
                // Product not found, do not update
                return currentProducts;
            }
            const newFavStatus = !currentProducts[prodIndex].isFavorite;
            const updatedProducts = [...currentProducts];
            updatedProducts[prodIndex] = {
                ...currentProducts[prodIndex],
                isFavorite: newFavStatus
            };
            return updatedProducts;
        });
    }

    return (
        <ProductsContext.Provider value={{products, toggleFav: toggleFavourite}}>{props.children}</ProductsContext.Provider>
    )
}