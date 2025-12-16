export default function ExpectedInterestInput() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("Current Savings changed to:", value);
  };
  return (
    <p>
      <label htmlFor="expected-return">Expected Interest (%, per year)</label>
      <input type="number" id="expected-return" onChange={handleChange} />
    </p>
  );
}
