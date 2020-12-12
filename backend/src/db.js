import { driver } from "./index";

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
    $set: {
      password: newPassword,
      first_login: false,
    },
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
  return property;
}

export async function updatePropertyState(nr_inscricao, situacao) {
  const collection = driver.collection("property");
  const query = { nr_inscricao: nr_inscricao };
  const toUpdate = {
    $set: { situacao },
  };
  const updated = await collection.updateOne(query, toUpdate);
  if (!updated) {
    return { ok: false, message: "Não foi possível atualizar registro" };
  }
  return { ok: true };
}

export async function addProperty(
  nr_inscricao,
  titulo,
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
  const exist = await getPropertyByInscricao(nr_inscricao);
  if (!exist) {
    insert = await collection.insertOne({
      nr_inscricao,
      titulo,
      img,
      endereco,
      tipo,
      nr_dormitorios: parseInt(nr_dormitorios),
      nr_banheiros: parseInt(nr_banheiros),
      nr_vagas_garagem: parseInt(nr_vagas_garagem),
      valor: parseFloat(valor),
      situacao: "disponivel",
    });
  }
  return insert;
}

export async function addInterest(nr_inscricao, nome, telefone) {
  const property = await getPropertyByInscricao(nr_inscricao);
  if (property) {
    const collection = driver.collection("interest");
    const aux = await collection.find({ nome, telefone }).toArray();
    if (aux.length > 2) {
      return {
        ok: false,
        message: "Você atingiu o número máximo de requisições de interesse.",
      };
    } else {
      const item = await collection.insertOne({
        nr_inscricao,
        nome,
        telefone,
      });
      return item;
    }
  } else {
    return { ok: false, message: "Este imóvel não existe." };
  }
}

export async function getPropertiesWithFilter(filter) {
  const collection = driver.collection("property");

  var query = {};

  if (filter.tipoImovel) {
    query.tipo = filter.tipoImovel;
  }

  if (filter.banheiros) {
    const _banheiros = parseInt(filter.nr_banheiros);
    if (_banheiros >= 3) {
      query.nr_banheiros = { $gte: _banheiros };
    } else {
      query.nr_banheiros = _banheiros;
    }
  }

  if (filter.quartos) {
    const _quartos = parseInt(filter.quartos);
    if (_quartos >= 3) {
      query.nr_dormitorios = { $gte: _quartos };
    } else {
      query.nr_dormitorios = _quartos;
    }
  }

  if (filter.garagem) {
    const _garagem = parseInt(filter.garagem);
    if (_garagem >= 2) {
      query.nr_vagas_garagem = { $gte: _garagem };
    } else {
      query.nr_vagas_garagem = _garagem;
    }
  }

  if (filter.precoMaximo && filter.precoMinimo) {
    query.valor = {
      $lte: parseFloat(filter.precoMaximo),
      $gte: parseFloat(filter.precoMinimo),
    };
  } else {
    if (filter.precoMaximo) {
      query.valor = { $lte: parseFloat(filter.precoMaximo) };
    } else if (filter.precoMinimo) {
      query.valor = { $gte: parseFloat(filter.precoMinimo) };
    }
  }

  if (!filter.logged) {
    query.situacao = { $in: ["disponivel", "reservado"] };
  }

  const properties = await collection.find(query).toArray();
  return properties;
}

export async function getInterests() {
  const collection = driver.collection("interest");
  const interests = await collection.find().toArray();
  return interests;
}

export async function removeInterest(nr_inscricao, nome, telefone) {
  const collection = driver.collection("interest");
  const interests = await collection.remove({ nr_inscricao, nome, telefone });
  console.log(interests);
  return interests;
}
