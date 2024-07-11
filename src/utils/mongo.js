import mongoose from "mongoose";

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB.");
    return conn;
  } catch (e) {
    throw new Error(e);
  }
}