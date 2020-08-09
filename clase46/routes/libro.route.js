const autorService = require("../services/autor.services")
const dataStore = require("../db/datastore")
const libroService = require("../services/libros.service")

// get para traer libros de autor
module.exports = function(server) {
    server.get("/autores/:id/libros", (req, res) => {
        // buscar autor por id
        let data = req.params.id
        try {
            let resultado = autorService.getAutorById(data)
                //   resultado. libro me devuelve el libro
            res.status(200).json(resultado.libros)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    });
    server.post("/autores/:id/libros", (req, res) => {
        let data = req.params.id
        let libro = req.body
        try {
            // let resultado = autorService.getAutorById(data)
            let libroNuevo = libroService.nuevoLibro(data, libro)
            res.status(201).json(libroNuevo)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    })
}