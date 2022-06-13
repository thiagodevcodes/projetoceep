const User = require("../models/usuario");

class Usuario {
    async acessarSistema(req, res) {
        const login = req.body.login;
        const senha = req.body.senha;
    
        const user = await User.findOne({
            where: {
                login: login,
                senha: senha
            }
        });
        
        if(user == null) {
            res.send("<h1>Senha ou Usuário incorretos!</h1>");
        } else {
            res.send("<h1>Login Efetuado com Sucesso!</h1>");
        };
    }
    
    async alterarSenha(req, res) {
        const login = req.body.login;
        const senha = req.body.senha;
        const confirm = req.body.confirm;

        const user = await User.findOne({where: {
            login: login
        }})

        if(user == null) {
            res.send("<h1>Usuário não encontrado!</h1>")
        } else {
            if(senha == confirm) {
                User.update({
                    senha: req.body.senha
                }, {
                    where: {
                        login: login
                    }
                }).then( () => {
                    res.send("<h1>Senha Alterada!</h1>");
                }).catch( () => {
                    res.send("<h1>Dados Incorretos!</h1>");
                });
            } else {
                res.send("<h1>Senhas não são iguais!</h1>");
            };
        }
    };
};

module.exports = Usuario;

