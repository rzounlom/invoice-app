export const getStatusStyles = (status: string | undefined) => {
  switch (status) {
    case "PAID":
      return {
        bg: "bg-[#dcf7ee]",
        text: "text-[#33D69F]",
        fill: "bg-[#33D69F]",
      };
    case "PENDING":
      return {
        bg: "bg-[#fdecd2]",
        text: "text-[#FF8F00]",
        fill: "bg-[#FF8F00]",
      };
    default:
      return {
        bg: "bg-[#e4e4ea]",
        text: "text-[#373B53]",
        fill: "bg-[#373B53]",
      };
  }
};
