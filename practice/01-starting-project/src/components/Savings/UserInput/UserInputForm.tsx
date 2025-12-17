import InputGroup from "../../InputGroup";
import CurrentSavingsInput from "./CurrentSavingsInput";
import YearlyContributionInput from "./YearlyContributionInput";
import ExpectedInterestInput from "./ExpectedInterestInput";
import InvestmentDurationInput from "./InvestmentDurationInput";
import SavingsFormActions from "../SavingsFormActions";
import { FormEvent } from "react";

export default function UserInputForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleChange = (input, value) => {
      console.log("Input changed:", input);
    console.log("Input changed to:", value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputGroup>
        <CurrentSavingsInput onInputChange={handleChange} />
        <YearlyContributionInput onInputChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <ExpectedInterestInput onInputChange={handleChange} />
        <InvestmentDurationInput onInputChange={handleChange} />
      </InputGroup>
      <SavingsFormActions />
    </form>
  );
}
