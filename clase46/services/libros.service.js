const dataStore = require("../db/datastore")
const autorService = require("../services/autor.services")

module.exports.nuevoLibro = function(data, libro) {
    let resultado = autorService.getAutorById(data)
    let agregaLibro = dataStore.agregarLibro(libro, resultado)
    return agregaLibro
}