import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const con = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB connected !! DB HOST: ${con.connection.host}`);
  } catch (error) {
    console.log("\n Mongodb connection error", error);
    process.exit(1);
  }
};
export default connectDB;
