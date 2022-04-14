import dbConnection from "./config/mongoDbConfig";
import dotenv from "dotenv";

dotenv.config();
dbConnection(`${process.env.MONGO_URI}`);
