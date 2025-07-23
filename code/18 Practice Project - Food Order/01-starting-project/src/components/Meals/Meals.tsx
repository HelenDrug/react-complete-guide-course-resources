import type {ReactElement} from "react";
import {useGetMeals} from "../../api/useMealsData";
import MealItem from "./MealItem";

export default function Meals(): ReactElement {
    const {meals, error, loading} = useGetMeals();

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul id="meals">
                {meals.map(meal => <MealItem key={meal.id} meal={meal}/>)}
            </ul>
        </>)
}