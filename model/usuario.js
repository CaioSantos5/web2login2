const Sequelize = require("sequelize");
const sequelize = new Sequelize("lojinha", "aluno", "ifpe2023", {
  host: "localhost",
  dialect: "mysql",
  //port: 3307 --> caso a port 3306 estiver ocupada
});

const Usuario = sequelize.define(
  "usuario",
  {
    login: {
      type: Sequelize.STRING(15)
    },
    nome: {
      type: Sequelize.STRING(50)
    },
    senha: {
      type: Sequelize.STRING(255)
    }
  });

  //Usuario.sync()

  module.exports = Usuario
