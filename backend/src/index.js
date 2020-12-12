import { PORT } from "./env";
import {
  addProperty,
  connect,
  getProperties,
  getPropertiesWithFilter,
  login,
  reset,
  updatePropertyState,
  addInterest,
  getInterests,
  removeInterest,
} from "./db";
import express from "express";
import http from "http";
import path from "path";
import { MONGO_URL } from "./env";
import { MongoClient } from "mongodb";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.static(path.resolve(__dirname, "../public")));

// REQUISIÇÕES BÁSICAS
app.post("/properties", async (req, res) => {
  const filter = req.body;
  if (filter) {
    const properties = await getPropertiesWithFilter(filter);
    res.json(properties);
  } else {
    const properties = await getProperties();
    res.json(properties);
  }
});

// REQUISICOES PARA UM CORRETOR
// requisição para aprovar login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const l = await login(username, password);
    if (!l) {
      res.json({ ok: false, message: "Usuário ou senha incorretos." });
    } else {
      res.json({
        ok: true,
        data: { username: l.username, name: l.nome, firstLogin: l.first_login },
      });
    }
  } else {
    return res.json({ ok: false, message: "Problema ao efetuar login." });
  }
});

// requisição para fazer troca de senha
app.post("/reset", async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const l = await reset(username, password);
    res.json({ ok: true });
  } else {
    res.json({ ok: false, message: "Problema ao atualizar senha." });
  }
});

// requisição para buscar interesses
app.get("/interests", async (req, res) => {
  const l = await getInterests()
  res.json(l);
})

// requisição para cadastrar imóvel
app.post("/property", async (req, res) => {
  const {
    nrInscricao,
    titulo,
    img,
    endereco,
    tipo,
    nrDormitorios,
    nrBanheiros,
    nrVagas,
    valor,
  } = req.body;
  if (
    nrInscricao &&
    img &&
    titulo &&
    endereco &&
    tipo &&
    nrDormitorios &&
    nrBanheiros &&
    nrVagas &&
    valor
  ) {
    const p = await addProperty(
      nrInscricao,
      titulo,
      img,
      endereco,
      tipo,
      nrDormitorios,
      nrBanheiros,
      nrVagas,
      valor
    );
    if (p) {
      res.json({ ok: true });
    } else {
      res.json({
        ok: false,
        message: "Já existe um imóvel com este número de inscrição.",
      });
    }
  } else {
    res.json({ ok: false, message: "Problema ao inserir imóvel." });
  }
});

// requisição para alterar situação de um imóvel
app.post("/update", async (req, res) => {
  const { nr_inscricao, situacao } = req.body;
  if (nr_inscricao && situacao) {
    const item = await updatePropertyState(nr_inscricao, situacao);
    res.json(item);
  } else {
    res.json({ ok: false, message: "Problema ao atualizar imóvel." });
  }
});

// REQUISICOES PARA UM INQUILINO
// requisição para manifestar interesse em um imóvel
app.post("/interest", async (req, res) => {
  const { nome, telefone, nr_inscricao } = req.body;
  if (nr_inscricao && telefone && nome) {
    const item = await addInterest(nr_inscricao, nome, telefone);
    if (!item?.ok) {
      res.json(item);
    } else {
      res.json({ ok: true });
    }
  } else {
    res.json({ ok: false, message: "Problema ao inscrever interesse." });
  }
});

app.post("/delete", async (req, res) => {
  const { nr_inscricao, nome, telefone } = req.body;
  const del = await removeInterest(nr_inscricao, nome, telefone);
  res.json(del);
});


const server = http.createServer(app);
let driver = new MongoClient(MONGO_URL, { useUnifiedTopology: true });
driver.connect((err, conn) => {
  if (err) {
    console.log(err);
  } else {
    driver = conn.db("WEB_PROPERTY_RENTAL");
    console.log("Conexão com MongoDB estabelecida");
  }
});

driver.once("open", () => {
  server.emit("ready");
});

server.on("ready", () => {
  server.listen(PORT, () =>
    console.log(`App disponível em http://localhost:${PORT}`)
  );
});

export { driver };
