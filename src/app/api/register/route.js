import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser } from "@/queries/users";
import { dbConnect } from "@/utils/mongo";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  console.log(name, email, password);

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name,
    password: hashedPassword,
    email
  }

  try {
    await createUser(newUser);
  } catch (err) {
    return new NextResponse(error.mesage, {
      status: 500,
    });
  }

  return new NextResponse("User has been created", {
    status: 201,
  });
};
