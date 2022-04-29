import mongoose from "mongoose";

const url = "mongodb://localhost:27017/nextjs-shop-backend";

export async function dbConnect() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("ERROR, could not connect to MongoDB", error.message);
  }
}
