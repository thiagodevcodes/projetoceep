const users = require("express").Router();
const User = require("../public/usuario");
const user = new User;

users.post("/login", (req, res) => {
    user.acessarSistema(req, res);
});

users.post("/alterarsenha", (req, res) => {
    user.alterarSenha(req, res);
});

module.exports = users;