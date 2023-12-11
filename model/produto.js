//Conexão ao Banco no Localhost

const Sequelize = require("sequelize");
const sequelize = new Sequelize("lojinha", "aluno", "ifpe2023", {
  host: "localhost",
  dialect: "mysql",
  //port: 3307 --> caso a port 3306 estiver ocupada
});
sequelize
  .authenticate()
  .then(function () {
    console.log("Conectado!!");
  })
  .catch(function (erro) {
    console.log("Erro ao conectar: " + erro);
  });
const Produto = sequelize.define('produto', {
  codigo: {
    type: Sequelize.INTEGER,
  },
  nome: {
    type: Sequelize.STRING,
  },
  preco: {
    type: Sequelize.DOUBLE,
  },
  marca: {
    type: Sequelize.STRING,
  },
}

);

module.exports = Produto
