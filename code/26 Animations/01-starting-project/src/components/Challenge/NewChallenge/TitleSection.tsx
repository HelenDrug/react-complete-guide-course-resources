import type { RefObject } from "react";

interface TitleSectionProps {
  titleRef: RefObject<HTMLInputElement | null>;
}
export default function TitleSection({ titleRef }: TitleSectionProps) {
  return (
    <p>
      <label htmlFor="title">Title</label>
      <input ref={titleRef} type="text" name="title" id="title" />
    </p>
  );
}
