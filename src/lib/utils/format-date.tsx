export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Get the day, month, and year
  const day = String(date.getDate()).padStart(2, "0"); // Pad single-digit day with a leading zero
  const month = date.toLocaleString("en-US", { month: "short" }); // Get the short month name (e.g., "Oct")
  const year = date.getFullYear();

  // Format the date as "01 Oct 2021"
  return `${day} ${month} ${year}`;
}
