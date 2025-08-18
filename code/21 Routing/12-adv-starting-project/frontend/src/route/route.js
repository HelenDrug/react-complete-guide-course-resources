import {createBrowserRouter} from "react-router-dom";
import Home from "../page/Home";
import Events, {eventsLoader} from "../page/Events";
import EventDetails from "../page/EventDetails";
import NewEvent from "../page/NewEvent";
import EditEvent from "../page/EditEvent";
import MainLayout from "../page/MainLayout";
import EventsLayout from "../page/EventsLayout";
import Error from "../page/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Home/>},
            {
                path: "events", element: <EventsLayout/>, children: [
                    {index: true, element: <Events/>, loader: eventsLoader},
                    {path: ":eventId", element: <EventDetails/>},
                    {path: "new", element: <NewEvent/>},
                    {path: ":eventId/edit", element: <EditEvent/>}
                ]
            },
        ]
    }
])