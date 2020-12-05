import { PORT } from "./env";
import { connect } from "./db";
import express from "express";
import http from "http";
import path from "path";

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../public")));

// REQUISIÇÕES BÁSICAS
app, get("/properties", async (req, res) => {});

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
app.post("/interest");

connect();
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Rodando em ${PORT}`));
