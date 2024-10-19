import { auth, currentUser } from "@clerk/nextjs/server";

import { FC } from "react";
import InvoiceLIst from "../ui/invoices/Invoice-list";
import InvoiceMain from "../ui/invoices/invoices-main";
import { db } from "@/db";

// import invoices from "@/data/data.json";

const Home: FC = async () => {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements

  console.log("Auth details", { userId, user });
  //TODO: remove hardcoded data and fetch from db

  const foundUser = await db.user.findUnique({
    where: {
      clerkId: user?.id,
    },
    include: {
      invoices: true, // Include the user's invoices in the query
    },
  });

  const userInvoices = foundUser?.invoices || [];

  return (
    <div className="w-full h-[calc(100vh-80px)] xl:w-[calc(100vw-103px)] xl:h-full">
      <InvoiceMain>
        <InvoiceLIst invoices={userInvoices} />
      </InvoiceMain>
    </div>
  );
};

export default Home;
