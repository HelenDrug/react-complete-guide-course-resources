import {createBrowserRouter} from "react-router-dom";
import Home from "../page/Home";
import Events from "../page/Events";
import EventDetails from "../page/EventDetails";
import NewEvent from "../page/NewEvent";
import EditEvent from "../page/EditEvent";

export const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/events", element: <Events/>},
    {path: "/events/:eventId", element: <EventDetails/>},
    {path: "/events/new", element: <NewEvent/>},
    {path: "/events/:eventId/edit", element: <EditEvent/>}
])