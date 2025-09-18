import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation } from "@tanstack/react-query";
import { createEvent } from "../../api/createEvent.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../api/QueryClient.js";

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      navigate('/events');
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending ? (
          <p>Sending request...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title={"Failed to create event"}
          message={error.info?.message || "Failed to create event"}
        />
      )}
    </Modal>
  );
}
