import {type ReactElement, useContext} from "react";
import type {MealType} from "../../types";
import {PATH} from "../../api/useMealsData";
import {formatCurrency} from "../../util/formatCurrency";
import Button from "../UI/Button";
import {CartContext} from "../../store/CartContext";

interface MealItemProps {
    meal: MealType
}

export default function MealItem({meal}: MealItemProps): ReactElement {

    const context = useContext(CartContext)

    const handleAddToCart = () => {
        const cartItem = {
            ...meal,
            quantity: 1
        }
        context.addItem(cartItem)
    }
    return (<li className="meal-item">
        <article>
            <img src={`${PATH}/${meal.image}`} alt={meal.name}/>
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{formatCurrency(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddToCart}>Add to cart</Button>
            </p>
        </article>
    </li>)
}