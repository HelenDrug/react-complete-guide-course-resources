import EventForm from "../components/EventForm";
import {useLoaderData} from "react-router-dom";

export default function EditEvent() {
    const data = useLoaderData()
    return (
        <>
            <h1>Edit Event Page</h1>
            <EventForm event={data.event}/>
        </>)

}