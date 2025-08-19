import {createBrowserRouter} from "react-router-dom";
import Home from "../page/Home";
import Events, {eventsLoader} from "../page/Events";
import EventDetails, {loader as eventDetailsLoader} from "../page/EventDetails";
import NewEvent, {action as newEventAction} from "../page/NewEvent";
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
                    {
                        path: ":eventId", children: [
                            {index: true, element: <EventDetails/>, loader: eventDetailsLoader},
                            {path: "edit", element: <EditEvent/>, loader: eventDetailsLoader}
                        ]
                    },
                    {path: "new", element: <NewEvent/>, action: newEventAction},
                ]
            },
        ]
    }
])