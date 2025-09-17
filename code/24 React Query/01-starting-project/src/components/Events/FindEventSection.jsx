import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../../api/getEvents.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function FindEventSection() {
  const [searchTerm, setSearchTerm] = useState();
  const searchElement = useRef();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", searchTerm],
    queryFn: ({ signal }) => getEvents({ signal, searchTerm }),
    enabled: !!searchTerm,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current?.value);
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {isLoading && <LoadingIndicator />}
      {isError && (
        <ErrorBlock
          title={"Failed to fetch events"}
          message={error.info?.message || "Failed to fetch events"}
        />
      )}
      {data && (
        <ul className="events-list">
          {data.map((event) => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>
                {event.date} - {event.location}
              </p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && !isError && (
        <p>Please enter a search term to find events.</p>
      )}
    </section>
  );
}
