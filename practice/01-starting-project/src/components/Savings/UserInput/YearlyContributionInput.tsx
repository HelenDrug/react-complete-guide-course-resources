import { InputProps } from "../../types";

export default function YearlyContributionInput({ onInputChange }: InputProps) {
  return (
    <p>
      <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
      <input
        type="number"
        id="yearly-contribution"
        onChange={(event) =>
          onInputChange("yearly-contribution", event.target.value)
        }
      />
    </p>
  );
}
