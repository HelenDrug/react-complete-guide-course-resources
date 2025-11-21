import { type FormEvent, useContext, useRef, useState } from "react";
import type { Challenge, Image } from "../../../shared/types.ts";
import TitleSection from "./TitleSection.tsx";
import DescriptionSection from "./DescriptionSection.tsx";
import ImagesSection from "./ImagesSection.tsx";
import NewChallengeActions from "./NewChallengeActions.tsx";
import { ChallengesContext } from "../../../store/ChallengesContext.ts";
import DeadlineSection from "./DeadlineSection.tsx";

interface NewChallengeFormProps {
  onDone: () => void;
}
export default function NewChallengeForm({ onDone }: NewChallengeFormProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const deadline = useRef<HTMLInputElement>(null);

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image: Image) {
    setSelectedImage(image);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Early return if any required field is missing
    if (
      !title.current ||
      !description.current ||
      !deadline.current ||
      !selectedImage
    ) {
      return;
    }
    const titleValue = title.current.value.trim();
    const descriptionValue = description.current.value.trim();
    const deadlineValue = deadline.current.value;
    const imageValue = selectedImage;

    // Validate input values
    if (!titleValue || !descriptionValue || !deadlineValue || !imageValue) {
      return;
    }

    const deadlineDate = new Date(deadlineValue);
    if (isNaN(deadlineDate.getTime())) {
      return;
    }

    const challenge: Challenge = {
      id: Date.now().toString(),
      title: titleValue,
      description: descriptionValue,
      deadline: deadlineDate,
      image: imageValue,
      status: "active",
    };

    addChallenge(challenge);
    onDone();
  }

  return (
    <form id="new-challenge" onSubmit={handleSubmit}>
      <TitleSection titleRef={title} />
      <DescriptionSection descriptionRef={description} />
        <DeadlineSection deadlineRef={deadline}/>
      <ImagesSection
        onSelectImage={handleSelectImage}
        selectedImage={selectedImage}
      />
      <NewChallengeActions onDone={onDone} />
    </form>
  );
}
