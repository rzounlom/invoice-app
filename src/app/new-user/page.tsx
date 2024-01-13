import { FC } from "react";
import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/utils/db";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();

  console.log({ clerkUser: user });

  const dbUser = await prisma.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  });

  console.log({ dbUser });

  if (!dbUser) {
    //if user somehow got created without the db knowing, create a new user in the db
    try {
      await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0].emailAddress,
        },
      });
    } catch (error) {
      console.error({ error });
    }
  }

  redirect("/invoices");
};

const NewUser: FC = async () => {
  await createNewUser();
  return <div>...loading</div>;
};

export default NewUser;
