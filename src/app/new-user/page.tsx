import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/db";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("sign-in");
  }

  const match = await db.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!match && user) {
    //if user somehow got created without the db knowing, create a new user in the db
    try {
      await db.user.create({
        data: {
          clerkId: user.id,
          email: user?.emailAddresses[0].emailAddress,
        },
      });

      console.log(
        `Sucessfully synced new user: ${user?.emailAddresses[0].emailAddress}`
      );
    } catch (error) {
      console.log("Error Syncing new user", error);
    }
  }

  redirect("/invoices");
};

export default async function NewUser() {
  await createNewUser();
  return <div>...loading</div>;
}
