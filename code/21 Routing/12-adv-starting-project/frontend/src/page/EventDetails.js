import {useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export async function loader({params}){
    const id = params.eventId;
    const response =  await fetch('http://localhost:8080/events/' + id)
    if(!response.ok) {
        throw new Response(
            JSON.stringify(
                {
                    message: 'Could not fetch event.'
                }
            ), {status: 500})
    }
    const data = await response.json();
    console.log('Loader fetched data:', data);
    if (!data.event) {
        throw new Response(
            JSON.stringify({ message: 'Event not found.' }),
            { status: 404 }
        );
    }
    return data;
}

export default function EventDetails() {
    const data = useLoaderData();
    console.log(data);
    if (!data || !data.event) {
        return <p>Event not found or failed to load.</p>;
    }
    return (
        <EventItem event={data.event}/>
    );
}