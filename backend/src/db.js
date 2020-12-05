import { MONGO_URL } from "./env";
import { MongoClient } from "mongodb";
const driver = new MongoClient(MONGO_URL, { useUnifiedTopology });

export async function connect() {
  driver.connect((err, conn) => {
    err && console.log(err);
    driver = conn.db("WEB_PROPERTY_RENTAL");
  });
}

export async function addProperty() {
  const collection = driver.collection("property");
}
