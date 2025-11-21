import { motion } from "framer-motion";

interface ChallengeDetailsProps {
  description: string;
  onViewDetails: () => void;
  isExpanded: boolean;
}

export default function ChallengeDetails({
  description,
  onViewDetails,
  isExpanded,
}: ChallengeDetailsProps) {
  return (
    <div className="challenge-item-details">
      <p>
        <button onClick={onViewDetails}>
          View Details{" "}
          <motion.span
            className="challenge-item-details-icon"
            animate={{
              rotate: isExpanded ? 180 : 0,
            }}
          >
            &#9650;
          </motion.span>
        </button>
      </p>

      {isExpanded && (
        <div>
          <p className="challenge-item-description">{description}</p>
        </div>
      )}
    </div>
  );
}
