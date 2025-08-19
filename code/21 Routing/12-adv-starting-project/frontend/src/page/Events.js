import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

async function loadEvents() {
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

export const eventsLoader = () => {
   /* return {
        events: loadEvents(),
        isError: false,
        message: ''
    }.catch((error) => {
        return {
            isError: true,
            message: error.message
        }
    })*/
    return loadEvents()
}
export default function EventsPage() {
    const data = useLoaderData()
    // return <Await resolve={data}/>
    const events = data.events
    return (
        <>
            {data.isError && <p>{data.message}</p>}
            <EventsList events={events}/>
        </>

    );
}