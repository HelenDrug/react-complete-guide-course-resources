import {Link} from "react-router-dom";

const EVENTS = [
    {id: 'event1', name: 'Event 1'},
    {id: 'event2', name: 'Event 2'},
    {id: 'event3', name: 'Event 3'},
    {id: 'event4', name: 'Event 4'},
    {id: 'event5', name: 'Event 5'},
];
export default function Events() {
    return (
        <>
        <h1>Events</h1>
        <p>Here is a list of events:</p>
        <ul>
            {
                EVENTS.map(event => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.name}</Link>
                    </li>
                ))
            }
        </ul>
        </>
    );
}