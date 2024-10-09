export function formatCurrency(num: number): string {
  // Round the number to 2 decimal places
  const roundedNum = num.toFixed(2);

  // Format the number with commas using toLocaleString
  return parseFloat(roundedNum).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
