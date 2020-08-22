const repoCanciones = require("../repo/canciones.repo")
const sql = require("../conexion/conexion")


module.exports.validarNuevaCancion = async function(data) {
    const { nombre, duracion, album, banda, fecha_publicacion } = data;
    let error = [];
    if (!nombre || !duracion || !album || !banda || !fecha_publicacion) {
        error.push({
            mensaje: "Falta Completar Campos",
        });
    }
    // valida que nombre de cancion creado no se repita
    let [buscarCancionPorNombre] = await sql.query("SELECT * FROM canciones WHERE nombre= :nombreCancion", { replacements: { nombreCancion: nombre } })
    console.log(buscarCancionPorNombre.length)
    if (buscarCancionPorNombre.length > 0) {
        error.push({
            mensaje: "ya existe una cancion con ese nombre"
        });
        return error
    }
    return error
}