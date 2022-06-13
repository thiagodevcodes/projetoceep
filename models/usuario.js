const db = require("../db/db.js");

const User = db.sequelize.define("usuarios", {
    login: {
        type: db.Sequelize.STRING
    },

    senha: {
        type: db.Sequelize.STRING
    }
});

//User.sync({force: true});

module.exports = User;