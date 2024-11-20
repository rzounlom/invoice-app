import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/new-user(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  // Check if the user is signed in and accessing the home route
  if (auth().userId && request.nextUrl.pathname === "/") {
    const invoicesUrl = new URL("/invoices", request.url);
    return NextResponse.redirect(invoicesUrl);
  }

  // Allow access to public routes
  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to the sign-in page
  if (!auth().userId) {
    const signInUrl = new URL("/sign-in", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
