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
    return response;
}

export default function EventDetails() {
    //const params = useParams()
    const data = useLoaderData()
    return (
            <EventItem event={data.event}/>
    );
}