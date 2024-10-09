export const titleCase = (str: string): string => {
  if (str.length === 0) return "";

  const begin = str.slice(0, 1).toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return begin + rest;
};
