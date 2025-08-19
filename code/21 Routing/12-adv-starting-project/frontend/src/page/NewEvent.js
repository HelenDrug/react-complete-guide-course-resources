import EventForm from "../components/EventForm";
import {redirect} from "react-router-dom";

export async function action({request}) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }

    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(!response.ok) {
        throw new Response(
            JSON.stringify(
                {
                    message: 'Could not save event.'
                }
            ), {status: 500})
    }
    return redirect("/events")
}

export default function NewEvent() {
    return <EventForm/>
}