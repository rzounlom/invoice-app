import { SignIn } from "@clerk/nextjs";
export default async function asyncPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
}
