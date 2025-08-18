import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

export const eventsLoader = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw new Response(
            JSON.stringify(
                {
                    message: 'Could not fetch events.'
                }
            ), {status: 500})
    } else {
        return response
    }
}
export default function EventsPage() {
    const data = useLoaderData()
    const events = data.events
    return (
        <>
            {data.isError && <p>{data.message}</p>}
            <EventsList events={events}/>
        </>

    );
}