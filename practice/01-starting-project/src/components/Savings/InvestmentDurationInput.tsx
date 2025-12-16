export default function InvestmentDurationInput() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("Current Savings changed to:", value);
  };
  return (
    <p>
      <label htmlFor="duration">Investment Duration (years)</label>
      <input type="number" id="duration" onChange={handleChange} />
    </p>
  );
}
