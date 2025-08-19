import {createBrowserRouter} from "react-router-dom";
import Home from "../page/Home";
import Events, {eventsLoader} from "../page/Events";
import EventDetails, {loader as eventDetailsLoader, action as eventDeleteAction} from "../page/EventDetails";
import NewEvent from "../page/NewEvent";
import EditEvent from "../page/EditEvent";
import MainLayout from "../page/MainLayout";
import EventsLayout from "../page/EventsLayout";
import Error from "../page/Error";
import {action as eventAction} from "../action"
import Newsletter, {action as newsletterAction} from "../page/Newsletter";

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
                            {index: true, element: <EventDetails/>, loader: eventDetailsLoader, action: eventDeleteAction},
                            {path: "edit", element: <EditEvent/>, loader: eventDetailsLoader, action: eventAction}
                        ]
                    },
                    {path: "new", element: <NewEvent/>, action: eventAction},
                ]
            },
            {
                path: 'newsletter',
                element: <Newsletter />,
                action: newsletterAction,
            },
        ]
    }
])