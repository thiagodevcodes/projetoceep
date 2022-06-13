const pages = require("express").Router();

pages.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/home.html")
});

pages.get("/portaldoaluno", (req,res) => {
    res.sendFile(__dirname + "/pages/login.html")
});

pages.get("/quemsomos", (req, res) => {
    res.sendFile(__dirname + "/pages/quemsomos.html")
});

pages.get ("/ensinomedio", (req, res) => {
    res.sendFile(__dirname + "/pages/ensinomedio.html")
});

pages.get ("/ensinopro", (req, res) => {
    res.sendFile(__dirname + "/pages/ensinopro.html")
});

pages.get ("/oficinas", (req, res) => {
    res.sendFile(__dirname + "/pages/oficinas.html")
});

pages.get ("/declaracoes", (req, res) => {
    res.sendFile(__dirname + "/pages/declaracoes.html")
});

pages.get("/recuperarsenha", (req, res) => {
    res.sendFile(__dirname + "/pages/recpassword.html")
});

module.exports = pages;