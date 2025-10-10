import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getEvent } from "../../api/getEvent.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { updateEvent } from "../../api/updateEvent.js";
import { queryClient } from "../../api/QueryClient.js";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending, error, isError } = useQuery({
    queryFn: ({ signal }) => getEvent({ signal, id }),
    queryKey: ["events", id],
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event
      await queryClient.cancelQueries({
        queryKey: ["events", id],
      })
      const previousEvent = queryClient.getQueryData(["events", id]);
      queryClient.setQueryData(["events", id], newEvent);
      return { previousEvent };
    },
    onError: (err, newEvent, context) => {
      queryClient.setQueryData(["events", id], context.previousEvent);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["events", id] });
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      {isPending && (
        <div className="center">
          <LoadingIndicator />
        </div>
      )}
      {isError && (
        <div id="event-details-content" className="center">
          <ErrorBlock
            title="Failed to load event"
            message={error.info?.message || "Failed to load event"}
          />
          <div className="form-actions">
            <Link to="../" className="button">
              OK
            </Link>
          </div>
        </div>
      )}
      {data && (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      )}
    </Modal>
  );
}
