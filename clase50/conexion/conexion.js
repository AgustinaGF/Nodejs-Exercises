const Sequelize = require("sequelize")
const sql = new Sequelize("mysql://root@localhost:3306/miArtistaFavorito")

// conecta a la Base de Datos
sql.authenticate().then(() => {
    console.log("Nos hemos conectado a la base de datos")
}).catch(error => {
    console.log("se ha producido un error", error)
})

module.exports = sql