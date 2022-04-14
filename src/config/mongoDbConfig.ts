import mongoose from "mongoose";

export default (db: string): void => {
  try {
    mongoose.connect(db);
    mongoose.connection.on("error", () => {
      throw new Error("Connection proccess failed");
    });
    mongoose.connection.once("connected", () =>
      console.log("Connected to MongoDB")
    );
  } catch (error) {
    throw new Error("Connection execution failed");
  }
};