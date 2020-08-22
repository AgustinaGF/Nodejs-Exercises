const sql = require("../conexion/conexion")
    // me devuelve todas las canciones
module.exports.getTodasLasCanciones = async function() {
        return new Promise((res, rej) => {
            sql.query("select * from canciones").then(resultados => {
                console.log(resultados)
                res(resultados[0])
            }).catch(err => {
                console.log("hola tenes un error")
                rej(err)
            })
        })
    }
    // crea cancion
module.exports.crearCancion = async(cancion) => {
        return new Promise((res, rej) => {
            sql.query('INSERT INTO canciones (nombre,duracion,album,banda,fecha_publicacion)VALUES (?,?,?,?,?)', { replacements: [cancion.nombre, cancion.duracion, cancion.album, cancion.banda, cancion.fecha_publicacion], type: sql.QueryTypes.INSERT }).then(resultado => {
                console.log(resultado);
                res(resultado)
            })
        })
    }
    // modificar Cancion Por ID
module.exports.modificarCancionPorID = async(idCancion, cancion) => {
        return new Promise((res, rej) => {
            console.log(cancion)
            console.log(idCancion)
            sql.query('UPDATE canciones SET  nombre = ?,duracion= ?,album = ?,banda=?,fecha_publicacion=? WHERE id =?', { replacements: [cancion.nombre, cancion.duracion, cancion.album, cancion.banda, cancion.fecha_publicacion, idCancion] }).then(resultado => {

                res(resultado)
            })
        })
    }
    // elimina cancion por Id
module.exports.eliminarCancionPorId = async(idCancion) => {
    return new Promise((res, rej) => {
        sql.query('DELETE FROM canciones WHERE id =?', { replacements: [idCancion] }).then(resultado => {
            res(resultado)
        })
    })
}