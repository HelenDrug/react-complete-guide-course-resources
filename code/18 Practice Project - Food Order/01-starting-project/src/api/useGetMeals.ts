import {useEffect, useState} from "react";
import type {MealType} from "../types";

interface MealsResponse {
    meals: MealType[],
    error: string | null,
    loading: boolean,
}

export const PATH = `${import.meta.env.VITE_PATH}`;

export const useGetMeals = (): MealsResponse => {
    const [meals, setMeals] = useState<MealType[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${PATH}/meals`);
                if (!response.ok) {
                    throw new Error('Failed to fetch places');
                }
                const data = await response.json();
                setMeals(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {meals, error, loading};
}