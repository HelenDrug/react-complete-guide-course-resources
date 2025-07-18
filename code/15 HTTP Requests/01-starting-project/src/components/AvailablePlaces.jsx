import Places from './Places.jsx';
import ErrorPage from "./ErrorPage.jsx";
import {useFetchPlaces} from "../api/usePlaces.js";

export default function AvailablePlaces({onSelectPlace}) {
    const {places, error, loading} = useFetchPlaces();

    if (loading) return <p>Loading places...</p>;
    if (error) return <ErrorPage title={"An error occurred!"} message={error.message}/>

    return (
        <Places
            title="Available Places"
            places={places}
            fallbackText={loading}
            onSelectPlace={onSelectPlace}
        />
    );
}
