import type { RefObject } from "react";

interface DeadlineSectionProps {
  deadlineRef: RefObject<HTMLInputElement | null>;
}
export default function DeadlineSection({ deadlineRef }: DeadlineSectionProps) {
  return (
    <p>
      <label htmlFor="deadline">Deadline</label>
      <input ref={deadlineRef} type="date" name="deadline" id="deadline" />
    </p>
  );
}
