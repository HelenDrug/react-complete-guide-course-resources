import type {ReactElement} from "react";
import {useGetMeals} from "../../api/useGetMeals";
import MealItem from "./MealItem";
import Error from "../UI/Error";

export default function Meals(): ReactElement {
    const {meals, error, loading} = useGetMeals();

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <Error title="Failed to fetch meals" message={error}/>}
            <ul id="meals">
                {meals.map(meal => <MealItem key={meal.id} meal={meal}/>)}
            </ul>
        </>)
}