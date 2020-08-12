const dataStore = require("../db/datastore");


// esto me devuelve los usuarios que tenga en el db array usuarios
module.exports.getUsuario = function(usuario) {
    return dataStore.usuarios;
}

module, exports.crearUsuario = function(usuario) {
    let buscarUsurioPorNombreyApellido = dataStore.usuarios
        .filter(r => r.nombre == usuario.nombre && r.apellido == usuario.apellido)
    if (buscarUsurioPorNombreyApellido.length > 0) {
        throw new Error("ya existe un usuario con ese nombre y apellido")
    }
    return dataStore.agregarUsuario(usuario)
}

// module.exports.getUsuarioByMail = function(mailUsuario) {
//     let buscarUsuarioPorMail = dataStore.usuarios.find(r => r.mail == mailUsuario)
//     if (buscarUsuarioPorMail) {
//         return buscarUsuarioPorMail
//     } else {
//         throw new Error("no existe usuario con ese mail")
//     }
// }

module, exports.modificarUsuario = async function(mailUsuario, data) {
    let buscarUsuarioPorMail = dataStore.usuarios.find(r => r.mail == mailUsuario)
    if (buscarUsuarioPorMail) {
        return await dataStore.usuarios.find({ usuarios: buscarUsuarioPorMail }, (error, res) => {
            return res
        })
    } else {
        throw new Error("no existe usuario con ese mail")
    }

}

// let resultado = dataStore.usuario
//     if (resultado !=1) {
//         throw new Error ("No se pudo modificar el usuario requerido")
//     }