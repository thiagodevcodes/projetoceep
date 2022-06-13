const Sequelize = require("sequelize");
const database = "ceep";
const usuario = "thiago";
const senha = "34616096";

const sequelize = new Sequelize(database, usuario, senha, {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};