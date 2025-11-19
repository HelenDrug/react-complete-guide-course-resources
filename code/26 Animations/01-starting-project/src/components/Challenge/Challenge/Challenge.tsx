import type { Challenge } from "../../../shared/types.ts";
import ChallengeHeader from "./ChallengeHeader.tsx";
import ChallengeDetails from "./ChallengeDetails.tsx";

interface ChallengeProps {
  challenge: Challenge;
  onViewDetails: () => void;
  isExpanded: boolean;
}

export default function Challenge({
  challenge,
  onViewDetails,
  isExpanded,
}: ChallengeProps) {
  return (
    <li>
      <article className="challenge-item">
        <ChallengeHeader challenge={challenge} />
        <ChallengeDetails
          description={challenge.description}
          onViewDetails={onViewDetails}
          isExpanded={isExpanded}
        />
      </article>
    </li>
  );
}
