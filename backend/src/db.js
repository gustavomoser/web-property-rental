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
  const query = { username, password };
  const user = await collection.findOne(query);
  return user;
}

export async function reset(username, newPassword) {
  const collection = driver.collection("user");
  const query = { username };
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

export async function getPropertyByInscricao(nr_inscricao) {
  const collection = driver.collection("property");
  const property = await collection.findOne({ nr_inscricao });
  return !!property;
}

export async function updatePropertyState(nr_inscricao, situacao) {
  const collection = driver.collection("property");
  const query = { nr_inscricao: nr_inscricao };
  const toUpdate = {
    $set: { situacao },
  };
  const updated = await collection.updateOne(query, toUpdate);
  return updated;
}

export async function addProperty(
  nr_inscricao,
  img,
  endereco,
  tipo,
  nr_dormitorios,
  nr_banheiros,
  nr_vagas_garagem,
  valor
) {
  const collection = driver.collection("property");
  let insert = null;
  if (!!getProperty(nrInscricao)) {
    insert = await collection.insertOne({
      nr_inscricao,
      img,
      endereco,
      tipo,
      nr_dormitorios: parseInt(nr_dormitorios),
      nr_banheiros: parseInt(nr_banheiros),
      nr_vagas_garagem: parseInt(nr_vagas_garagem),
      valor: parseFloat(valor),
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
        nome,
        telefone,
      });
      return item;
    }
  } else {
    return "Este imóvel não existe.";
  }
}

export async function getPropertiesWithFilter(filter) {
  const collection = driver.collection("property");

  var query = {};
  if (filter.tipo) {
    query.tipo = filter.tipo;
  }
  if (filter.nr_banheiros) {
    query.nr_banheiros = parseInt(filter.nr_banheiros);
  }
  if (filter.nr_dormitorios) {
    query.nr_dormitorios = parseInt(filter.nr_dormitorios);
  }
  if (filter.nr_vagas_garagem) {
    query.nr_vagas_garagem = parseInt(filter.nr_vagas_garagem);
  }

  if (filter.valorMaximo && filter.valorMinimo) {
    query.valor = {
      $lte: parseFloat(filter.valorMaximo),
      $gte: parseFloat(filter.valorMinimo),
    };
  } else {
    if (filter.valorMaximo) {
      query.valor = { $lte: parseFloat(filter.valorMaximo) };
    } else if (filter.valorMinimo) {
      query.valor = { $gte: parseFloat(filter.valorMinimo) };
    }
  }
  const properties = await collection.find(query).toArray();
  return properties;
}
