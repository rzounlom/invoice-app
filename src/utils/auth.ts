import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

export const getUserFromClerkID = async (select = { id: true }) => {
  const { userId } = auth();
  try {
    const user = await prisma.user.findUnique({
      //throw in case user is in clerk but not in my db
      where: {
        clerkId: userId as string,
      },
      select, //select properties to select from model
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};
