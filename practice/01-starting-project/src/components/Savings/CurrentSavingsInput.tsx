export default function CurrentSavingsInput() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("Current Savings changed to:", value);
  };

  return (
    <p>
      <label htmlFor="current-savings">Current Savings ($)</label>
      <input type="number" id="current-savings" onChange={handleChange} />
    </p>
  );
}
