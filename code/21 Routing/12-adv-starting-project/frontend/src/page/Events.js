import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

export const eventsLoader = async()=> {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Events not found');
        } else if (response.status === 500) {
            throw new Error('Server error, please try again later');
        } else {
            throw new Error('An unexpected error occurred');
        }
    } else {
        const data = await response.json();
        return data.events
    }
}
export default function EventsPage() {
    const events = useLoaderData()
    return (
        <EventsList events={events}/>
    );
}