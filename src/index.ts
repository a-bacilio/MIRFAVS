import { createUserService } from './objects/users/services/CreateUser/createUserService';
import dbConnection from "./config/mongoDbConfig";
import dotenv from "dotenv";
import app from "./app"

dotenv.config();
dbConnection(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () =>
  console.log(`Express Server Connected to port ${process.env.PORT}`)
);


