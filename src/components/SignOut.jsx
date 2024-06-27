import { signOut } from "@/auth"

export function SignOut() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        className="bg-gray-800 p-6 rounded shadow-md"
        action={async () => {
            "use server"
            await signOut()
          }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign Out</h2>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign out from GitHub
        </button>
      </form>
    </div>
  );
}

/*
import { signOut } from "@/auth"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}
*/