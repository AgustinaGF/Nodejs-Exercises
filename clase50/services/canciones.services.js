const Sequelize = require("sequelize")
const sql = new Sequelize("mysql://root@localhost:3306/miArtistaFavorito")

module.exports.getTodasLasCanciones = function() {
    sql.query("select * from canciones", { type: Sequelize.QueryTypes.SELECT }).then(resultados => {
        console.log(resultados)
        return resultados
    }).catch(err => {
        console.log("hola tenes un error")
    })
}