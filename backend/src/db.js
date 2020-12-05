import { MONGO_URL } from "./env";
import { MongoClient } from "mongodb";
let driver = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

export async function connect() {
  driver.connect((err, conn) => {
    if (err) {
      console.log(err);
    }
    driver = conn.db("WEB_PROPERTY_RENTAL");
  });
}

export async function getProperties() {
  const collection = driver.collection("property");
  const properties = await collection.find().toArray();
  return properties;
}

export async function addProperty() {
  const collection = driver.collection("property");
}
