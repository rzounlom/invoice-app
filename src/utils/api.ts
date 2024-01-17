import { Invoice } from "@/types";

const createURL = (path: string) => window.location.origin + path;

export const getInvoices = async (userId: string) => {
  const res = await fetch(
    new Request(createURL(`/api/invoices`), {
      method: "GET",
      body: JSON.stringify({ userId }),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

export const createNewInvoices = async (invoice: Partial<Invoice>) => {
  const res = await fetch(
    new Request(createURL(`/api/invoices`), {
      method: "POST",
      body: JSON.stringify({ invoice }),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};
