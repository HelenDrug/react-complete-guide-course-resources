import {useParams} from "react-router-dom";

export default function EventDetails() {
    const params = useParams()
    return (
        <>
            <h1>Event Details</h1>
            <p>Details for the selected event will be displayed here.</p>
            <p>Event ID: {params.eventId}</p>
        </>
    );
}