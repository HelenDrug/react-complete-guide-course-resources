import type { RefObject } from "react";

interface DescriptionSectionProps {
  descriptionRef: RefObject<HTMLTextAreaElement | null>;
}
export default function DescriptionSection({
  descriptionRef,
}: DescriptionSectionProps) {
  return (
    <p>
      <label htmlFor="description">Description</label>
      <textarea ref={descriptionRef} name="description" id="description" />
    </p>
  );
}
