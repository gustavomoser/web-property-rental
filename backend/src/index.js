import { PORT } from "./env";
import { connect, getProperties } from "./db";
import express from "express";
import http from "http";
import path from "path";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../public")));

// REQUISIÇÕES BÁSICAS
app,
  get("/properties", async (req, res) => {
    const filter = req.body.filter;
    if (filter) {
    } else {
      const properties = await getProperties();
      res.json(properties);
    }
  });

// REQUISICOES PARA UM CORRETOR
// requisição para aprovar login
app.post("/login", async (req, res) => {});

// requisição para fazer troca de senha
app.post("/reset", async (req, res) => {});

// requisição para cadastrar imóvel
app.post("/property", async (req, res) => {});

// requisição para alterar situação de um imóvel
app.post("/property/update", async (req, res) => {});

// REQUISICOES PARA UM INQUILINO
// requisição para manifestar interesse em um imóvel
app.post("/interest", async (req, res) => {});

connect();
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Rodando em ${PORT}`));
