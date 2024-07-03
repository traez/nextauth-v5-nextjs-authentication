import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 bg-gray-100">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-lg text-center">
      <p className="text-xl font-semibold text-gray-800 mb-4">
        Welcome to my Auth.js (NextAuth) Testing App
      </p>
      {session?.user?.name ? (
        <h2 className="text-2xl font-bold text-green-600">
          Hello {session.user.name}
        </h2>
      ) : (
        <h2 className="text-2xl font-bold text-red-600">
          Welcome, Guest
        </h2>
      )}
    </div>
  </main>
  );
}
