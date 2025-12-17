import { ChangeEvent } from "react";
import { InputProps } from "../../../types";

export default function CurrentSavingsInput({ onInputChange }: InputProps) {
    const [currentSavings, setCurrentSavings] = React.useState<number | string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCurrentSavings((prev) =>value);
        onInputChange("current-savings", value);
    }
  return (
    <p>
      <label htmlFor="current-savings">Current Savings ($)</label>
      <input
        type="number"
        id="current-savings"
        onChange={(event) =>
          onInputChange("current-savings", event.target.value)
        }
      />
    </p>
  );
}
