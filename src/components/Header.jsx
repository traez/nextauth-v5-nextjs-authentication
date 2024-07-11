import Link from "next/link";
import { auth } from "@/auth";
import SocialsLogin from "@/components/SocialsLogin";
import Logout from "@/components/Logout";

export default async function Header() {
  const session = await auth();

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-blue-700 ">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg font-bold text-white capitalize hover:text-black">
              AuthJs (NextAuth) Authentication App
            </div>
          </Link>
        </div>
        <div className="flex items-center text-white">
          <Link href="home" className="text-gray-300 hover:text-black mr-4">
            Home
          </Link>
          {session?.user? <Logout /> : <SocialsLogin />}
        </div>
      </nav>
    </>
  );
}

/*
hate
*/
