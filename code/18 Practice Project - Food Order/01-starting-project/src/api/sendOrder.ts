import {PATH} from "./useGetMeals";
import type {Order} from "../types";

export const sendOrder = async (order: Order): Promise<Order> => {
    try {
        const response = await fetch(
            `${PATH}/orders`,
            {
                method: "POST",
                body: JSON.stringify({order}),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (!response.ok) {
            throw new Error("Failed to send order");
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending order:", error);
        throw error;
    }
};
