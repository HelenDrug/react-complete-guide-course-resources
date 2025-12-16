export interface YearlyData {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
}

export const calculateHandler = (userInput: UserInput): YearlyData[] => {
  const {
    currentSavings: initialSavings,
    yearlyContribution,
    expectedReturn,
    duration,
  } = userInput;
  const yearlyReturn = expectedReturn / 100;

  let currentSavings = initialSavings;

  return Array.from({ length: duration }).map((_, idx) => {
    const yearlyInterest = currentSavings * yearlyReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    return {
      year: idx + 1,
      yearlyInterest: +yearlyInterest.toFixed(2),
      savingsEndOfYear: +currentSavings.toFixed(2),
      yearlyContribution,
    };
  });
};
