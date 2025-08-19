import {redirect} from "react-router-dom";

export async function action({request, params}) {
    const data = await request.formData();
    const method = request.method;
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }
    let url = 'http://localhost:8080/events';
    if (method === 'PATCH') {
        const id = params.eventId
        url = 'http://localhost:8080/events/' + id;
    }
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!response.ok) {
        throw new Response(
            JSON.stringify(
                {
                    message: 'Could not save event.'
                }
            ), {status: 500})
    }
    return redirect("/events")
}