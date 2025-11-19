import { useContext } from "react";
import type { Challenge } from "../../../shared/types.ts";
import { ChallengesContext } from "../../../store/ChallengesContext.ts";

interface ChallengeHeaderProps {
  challenge: Challenge;
}

export default function ChallengeHeader({ challenge }: ChallengeHeaderProps) {
  const { updateChallengeStatus } = useContext(ChallengesContext);

  function handleCancel() {
    updateChallengeStatus(challenge.id, "failed");
  }

  function handleComplete() {
    updateChallengeStatus(challenge.id, "completed");
  }

  const formattedDate = new Date(challenge.deadline).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );

  return (
    <header>
      <img
        {...challenge.image}
        alt={challenge.image.alt || "Challenge Image"}
      />
      <div className="challenge-item-meta">
        <h2>{challenge.title}</h2>
        <p>Complete until {formattedDate}</p>
        <p className="challenge-item-actions">
          <button onClick={handleCancel} className="btn-negative">
            Mark as failed
          </button>
          <button onClick={handleComplete}>Mark as completed</button>
        </p>
      </div>
    </header>
  );
}
