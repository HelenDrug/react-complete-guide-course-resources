interface NewChallengeActionsProps {
  onDone: () => void;
}
export default function NewChallengeActions({
  onDone,
}: NewChallengeActionsProps) {
  return (
    <p className="new-challenge-actions">
      <button type="button" onClick={onDone}>
        Cancel
      </button>
      <button>Add Challenge</button>
    </p>
  );
}
