import {createBrowserRouter} from "react-router-dom";
import Home from "../page/Home";
import Events from "../page/Events";
import EventDetails from "../page/EventDetails";
import NewEvent from "../page/NewEvent";
import EditEvent from "../page/EditEvent";
import MainLayout from "../page/MainLayout";
import EventsLayout from "../page/EventsLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {path: "/", element: <Home/>},
            {
                path: "/events", element: <EventsLayout/>, children: [
                    {path: "/events", element: <Events/>},
                    {path: "/events/:eventId", element: <EventDetails/>},
                    {path: "/events/new", element: <NewEvent/>},
                    {path: "/events/:eventId/edit", element: <EditEvent/>}
                ]
            },
        ]
    }
])