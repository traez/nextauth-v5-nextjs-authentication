import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");
  //console.log(session);

  const { name, image, email } = session?.user || {};
  const expires = session?.expires;

  return (
    <section className="flex flex-col items-center m-4">
      {name && image ? (
        <>
          <h1 className="text-3xl my-2">Welcome, {name}</h1>
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-xl my-2">Email: {email}</p>
          <p className="text-xl my-2">
            Session Expires: {new Date(expires).toLocaleString()}
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold my-2">Welcome, {name}</h1>
          <p className="text-2xl font-bold my-2">Email: {email}</p>
        </>
      )}
    </section>
  );
};

export default HomePage;
