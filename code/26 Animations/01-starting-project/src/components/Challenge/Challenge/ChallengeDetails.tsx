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
          <span className="challenge-item-details-icon">&#9650;</span>
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
