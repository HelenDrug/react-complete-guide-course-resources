import type { Challenge } from "../../../shared/types.ts";
import ChallengeHeader from "./ChallengeHeader.tsx";
import ChallengeDetails from "./ChallengeDetails.tsx";
import { motion } from "framer-motion";

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
    <motion.li layout exit={{ y: -30, opacity: 0 }}>
      <article className="challenge-item">
        <ChallengeHeader challenge={challenge} />
        <ChallengeDetails
          description={challenge.description}
          onViewDetails={onViewDetails}
          isExpanded={isExpanded}
        />
      </article>
    </motion.li>
  );
}
