// app/api/sync-user/route.ts
import { NextRequest, NextResponse } from "next/server";

import { clerkClient } from "@clerk/clerk-sdk-node";
import { db } from "@/db";

export async function POST(req: NextRequest) {
  console.log("Sync user route hit");

  try {
    const { userId } = await req.json();
    console.log("Request body:", { userId });

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch user from Clerk
    const user = await clerkClient.users.getUser(userId);
    console.log("Clerk user fetched:", user);

    // Check if user exists in Prisma
    const dbUser = await db.user.findUnique({
      where: { id: userId },
    });

    console.log("Prisma user found:", dbUser);

    if (!dbUser) {
      // If the user does not exist, create a new one
      await db.user.create({
        data: {
          id: userId,
          email: user.emailAddresses[0].emailAddress,
        },
      });
      console.log("User created in Prisma");
    }

    return NextResponse.json(
      { message: "User synced successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error syncing user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
