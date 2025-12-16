export default function YearlyContributionInput() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("Current Savings changed to:", value);
  };
  return (
    <p>
      <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
      <input type="number" id="yearly-contribution" onChange={handleChange} />
    </p>
  );
}
