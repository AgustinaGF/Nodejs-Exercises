const express = require("express");
const router = express.Router();
const services = require("../services/canciones.services")
const repoCanciones = require("../repo/canciones.repo")
const conexion = require("../conexion/conexion")

router.get("/", async(req, res) => {
    try {
        let resultado = await repoCanciones.getTodasLasCanciones()
        console.log(resultado)
        res.status(200).send(resultado)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });
    }
})
router.post("/", async(req, res) => {
    try {
        let cancion = req.body;
        let validacionCancion = await services.validarNuevaCancion(cancion)
        if (validacionCancion.length > 0) {
            res.status(400).json({ exito: false, data: validacionCancion });
        }
        let nuevaCancion = await repoCanciones.crearCancion(cancion);
        res.status(201).json({ exito: true, data: nuevaCancion })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message })
    }
})

router.put("/:id", async(req, res) => {
    let idCancion = req.params.id
    let cancion = req.body
    try {
        let resultado = await repoCanciones.modificarCancionPorID(idCancion, cancion)
        res.status(200).json(resultado)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.delete("/:id", async(req, res) => {
    let idCancion = req.params.id
    try {
        let resultado = await repoCanciones.eliminarCancionPorId(idCancion)
        res.status(200).json(resultado)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})








module.exports = router