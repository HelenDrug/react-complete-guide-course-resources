import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getEvent } from "../../api/getEvent.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { deleteEvent } from "../../api/deleteEvent.js";
import { queryClient } from "../../api/QueryClient.js";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: event,
    error,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => getEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: ()=>{
      navigate('/events');
      queryClient.invalidateQueries({ queryKey: ["events"] }).then();
    }
  });

  const handleDelete = () => {
    mutate({ id });
  };

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {isPending ? (
          <div id="event-details-content" className="center">
            Loading...
          </div>
        ) : isError ? (
          <div id="event-details-content" className="center">
            <ErrorBlock
              title={"Failed to load event"}
              message={error.info?.message || "Failed to load event"}
            />
          </div>
        ) : event ? (
          <>
            <header>
              <h1>{event.title}</h1>
              <nav>
                <button onClick={handleDelete}>Delete</button>
                <Link to="edit">Edit</Link>
              </nav>
            </header>
            <div id="event-details-content">
              <img
                src={`http://localhost:3000/${event.image}`}
                alt={event.title}
              />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{event.location}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>
                    {event.date} @ {event.time}
                  </time>
                </div>
                <p id="event-details-description">{event.description}</p>
              </div>
            </div>
          </>
        ) : (
          <div id="event-details-content" className="center">
            <p>No event found.</p>
          </div>
        )}
      </article>
    </>
  );
}
