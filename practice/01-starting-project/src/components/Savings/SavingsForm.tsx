import InputGroup from "../InputGroup";
import CurrentSavingsInput from "./CurrentSavingsInput";
import YearlyContributionInput from "./YearlyContributionInput";
import ExpectedInterestInput from "./ExpectedInterestInput";
import InvestmentDurationInput from "./InvestmentDurationInput";
import SavingsFormActions from "./SavingsFormActions";

export default function SavingsForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputGroup>
        <CurrentSavingsInput />
        <YearlyContributionInput />
      </InputGroup>
      <InputGroup>
        <ExpectedInterestInput />
        <InvestmentDurationInput />
      </InputGroup>
      <SavingsFormActions />
    </form>
  );
}
