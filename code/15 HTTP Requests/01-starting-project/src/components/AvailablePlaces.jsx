import Places from './Places.jsx';
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage.jsx";

function useFetchPlaces() {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use an IIFE to handle the async function and return a cleanup if needed
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

export default function AvailablePlaces({ onSelectPlace }) {
  const { places, error, loading } = useFetchPlaces();

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
