import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  //console.log(session);

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2">Welcome, {session?.user?.name}</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={200}
        height={200}
        className="rounded-full"
      />
       <p className="text-xl my-2">Email: {session?.user?.email}</p>
      <p className="text-xl my-2">
        Session Expires: {new Date(session.expires).toLocaleString()}
      </p>
    </div>
  );
};

export default HomePage;
