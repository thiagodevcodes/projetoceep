const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const pages = require("./routes/pages");
const users = require("./routes/users");

//CAMINHO DOS ARQUIVOS ESTÁTICOS

app.use(express.static(path.join(__dirname, "static")));

//BODY PARSER

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//ROTAS

app.use("/", pages, users);

//CONFIGURAÇÃO DO SERVIDOR

const port = 8080
app.listen(port, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});



