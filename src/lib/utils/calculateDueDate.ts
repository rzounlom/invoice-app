export function calculateDueDate(
  paymentDue: Date | string,
  paymentTerms: number
): Date {
  // Convert paymentDue to a Date object if it's a string
  const initialDate =
    typeof paymentDue === "string" ? new Date(paymentDue) : paymentDue;

  // Determine the number of days to add based on paymentTerms
  let daysToAdd: number;
  switch (paymentTerms) {
    case 1:
      daysToAdd = 30;
      break;
    case 2:
      daysToAdd = 60;
      break;
    case 3:
      daysToAdd = 90;
      break;
    default:
      throw new Error("Invalid payment terms. Must be 1, 2, or 3.");
  }

  // Calculate and return the new due date
  const resultDate = new Date(initialDate);
  resultDate.setDate(resultDate.getDate() + daysToAdd);
  return resultDate;
}
