import { InputProps } from "../../types";

export default function InvestmentDurationInput({ onInputChange }: InputProps) {
  return (
    <p>
      <label htmlFor="duration">Investment Duration (years)</label>
      <input
        type="number"
        id="duration"
        onChange={(event) => onInputChange("duration", event.target.value)}
      />
    </p>
  );
}
