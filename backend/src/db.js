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

export async function login(username, password) {
  const collection = driver.collection("user");
  const query = { username: username, password: password };
  const user = await collection.findOne(query);
  return user;
}

export async function reset(username, newPassword) {
  const collection = driver.collection("user");
  const query = { username: username };
  const toUpdate = {
    $set: { password: newPassword },
  };
  const updated = await collection.updateOne(query, toUpdate);
  return updated;
}

export async function getProperties() {
  const collection = driver.collection("property");
  const properties = await collection.find().toArray();
  return properties;
}

export async function getPropertyByInscricao(nrInscricao) {
  const collection = driver.collection("property");
  const property = await collection.findOne({ nr_inscricao: nrInscricao });
  return !!property;
}

export async function updatePropertyState(nrInscricao, situacao) {
  const collection = driver.collection("property");
  const query = { nr_inscricao: nrInscricao };
  const toUpdate = {
    $set: { situacao: situacao },
  };
  const updated = await collection.updateOne(query, toUpdate);
  return updated;
}

export async function addProperty(
  nrInscricao,
  img,
  endereco,
  tipo,
  nrDormitorios,
  nrBanheiros,
  nrVagas,
  valor
) {
  const collection = driver.collection("property");
  let insert = null;
  if (!!getProperty(nrInscricao)) {
    insert = await collection.insertOne({
      nr_inscricao: nrInscricao,
      img,
      endereco,
      tipo,
      nr_dormitorios: nrDormitorios,
      nr_banheiros: nrBanheiros,
      nr_vagas_garagem: nrVagas,
      valor,
    });
  }
  return insert;
}

export async function addInterest(nr_inscricao, nome, telefone) {
  const property = await getPropertyByInscricao(nr_inscricao);
  if (property) {
    const collection = driver.collection("interest");
    const length = await collection.find({ nome, telefone });
    if (length > 3) {
      return "Você atingiu o número máximo de requisições de interesse.";
    } else {
      const item = await collection.insertOne({
        nr_inscricao,
        nome: nome,
        telefone: telefone,
      });
      return item;
    }
  } else {
    return "Este imóvel não existe.";
  }
}
