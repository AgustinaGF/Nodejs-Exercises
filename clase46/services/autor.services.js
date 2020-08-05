const dataStore = require("../db/datastore")

module.exports.getAutores = function() {
    return dataStore.autores;
}

module.exports.createAutor = function(autor) {
    let buscarAutoresPorNombreyApellido = dataStore.autores
        .filter(r => r.nombre == autor.nombre && r.apellido == autor.apellido)
    if (buscarAutoresPorNombreyApellido.length > 0) {
        throw new Error("Ya existe un autor con ese nombre y apellido")
    }
    return dataStore.agregarAutor(autor);
}