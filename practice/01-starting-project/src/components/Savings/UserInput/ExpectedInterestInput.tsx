import { InputProps } from "../../types";

export default function ExpectedInterestInput({ onInputChange }: InputProps) {
  return (
    <p>
      <label htmlFor="expected-return">Expected Interest (%, per year)</label>
      <input
        type="number"
        id="expected-return"
        onChange={(event) =>
          onInputChange("expected-return", event.target.value)
        }
      />
    </p>
  );
}
