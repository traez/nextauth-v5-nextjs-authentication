import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SignOut } from "@/components/SignOut";

export default async function  SignOutPage ()  {
  const session = await auth()

  if (!session?.user) redirect('/');

  return <SignOut />;
};


