import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SignIn } from "@/components/SignIn";


export default async function SignInPage(){
    const session = await auth()

    if (session?.user) redirect('/')

    return <SignIn />
}


