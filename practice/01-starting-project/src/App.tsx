import React from "react";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header";
import UserInputForm from "./components/Savings/UserInput/UserInputForm";
import ResultTable from "./components/Savings/ResultTable/ResultTable";

export default function App() {
  const result = null; // Placeholder for result data
  return (
    <>
      <Header logo={logo} />
      <UserInputForm />
      {result ? (
        <ResultTable />
      ) : (
        <p className="fallback">No investment calculated yet.</p>
      )}
    </>
  );
}
