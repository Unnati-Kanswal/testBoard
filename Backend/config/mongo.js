import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const mongoDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGOURL);
    console.log("Connected to database!!");
  } catch (error) {
    console.log("Error while connecting to database!!", error);
  }
};
