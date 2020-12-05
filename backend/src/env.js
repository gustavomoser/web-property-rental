/* eslint-disable no-console */
import path from "path";
import dotenv from "dotenv";

const env = path.join(__dirname, "../.env");
dotenv.config({ path: env });

let error = false;

if (!process.env.PORT) {
  console.log("Defina a variável PORT em backend/.env \n");
  error = true;
}

if (!process.env.MONGO_URL) {
  console.log("Defina a variável MONGO_URL em backend/.env");
  error = true;
}

error && process.exit(1);

const PORT = parseInt(process.env.PORT);
const MONGO_URL = process.env.MONGO_URL;
export { PORT, MONGO_URL };
