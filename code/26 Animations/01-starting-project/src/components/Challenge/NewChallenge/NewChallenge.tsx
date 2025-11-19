import NewChallengeModal from "./NewChallengeModal.tsx";
import NewChallengeForm from "./NewChallengeForm.tsx";

interface NewChallengeProps {
  onDone: () => void;
}

export default function NewChallenge({ onDone }: NewChallengeProps) {
  return (
    <NewChallengeModal title="New Challenge" onClose={onDone}>
      <NewChallengeForm onDone={onDone} />
    </NewChallengeModal>
  );
}
