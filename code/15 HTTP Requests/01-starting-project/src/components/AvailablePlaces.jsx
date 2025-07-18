import Places from './Places.jsx';
import ErrorPage from "./ErrorPage.jsx";
import {useFetchPlaces} from "../api/usePlaces.js";

export default function AvailablePlaces({onSelectPlace}) {
    const {places, error, loading} = useFetchPlaces();

    return (
        <>
            {loading && <p>Loading available places...</p>}
            {error && <ErrorPage title={"An error occurred!"} message={error.message}/>}
            <Places
                title="Available Places"
                places={places}
                fallbackText={loading}
                onSelectPlace={onSelectPlace}
            />
        </>

    );
}
