import Link from "next/link";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth()

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-blue-700 ">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg font-bold text-white uppercase">
              AuthJs Authentication App
            </div>
          </Link>
        </div>
        <div className="flex items-center text-white">
        {session?.user?.name ? (
          <Link href="sign-out" className="text-gray-300 hover:text-white mr-4">
            Sign Out
          </Link>
        ) : (
          <Link href="sign-in" className="text-gray-300 hover:text-white mr-4">
            Sign In
          </Link>
        )}
        </div>
      </nav>
    </>
  );
};


