import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()
  console.log({session})

  return (
    <main className="flex min-h-screen flex-col items-center justify-items-center p-24">
     <p>Trae</p>
     {session?.user?.name ? (
        <h2>Hello {session.user.name}</h2>
      ) : (
        <h2>Welcome, Guest</h2>
      )}
    </main>
  );
}
