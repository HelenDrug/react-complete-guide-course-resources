import {useEffect, useState} from "react";

export const useFetchPlaces=()=> {
    const [places, setPlaces] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:3000/places');
                if (!response.ok) {
                    throw new Error('Failed to fetch places');
                }
                const data = await response.json();
                setPlaces(data.places);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return { places, error, loading };
}

export const updateUserPlaces = async (places) => {
    try {
        const response = await fetch('http://localhost:3000/user-places', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ places }),
        });

        if (!response.ok) {
            throw new Error('Failed to update user places');
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating user places:', error);
        throw error;
    }
};



