import { type UserInput } from "../../types";
import { calculateHandler } from "../../shared/calculate";

interface SavingsFormActionsProps {
  userInput: UserInput;
}

export default function SavingsFormActions({
  userInput,
}: SavingsFormActionsProps) {
  const handleReset = () => {
    console.log("Form reset");
  };
  const handleCalculate = () => {
    const result = calculateHandler(userInput);
    console.log("Calculate clicked");
  };

  return (
    <p className="actions">
      <button type="reset" className="buttonAlt" onClick={handleReset}>
        Reset
      </button>
      <button type="submit" className="button" onClick={handleCalculate}>
        Calculate
      </button>
    </p>
  );
}
