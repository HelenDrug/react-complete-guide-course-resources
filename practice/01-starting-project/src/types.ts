import { ChangeEvent } from "react";

export interface UserInput {
  currentSavings: number;
  yearlyContribution: number;
  expectedReturn: number;
  duration: number;
}
export interface InputProps {
  onInputChange: (input: string, value: ChangeEvent<HTMLInputElement>) => void;
}
