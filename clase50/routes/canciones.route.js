const express = require("express");
const router = express.Router();
const cancionesServicio = require("../services/canciones.services")

router.get("/", async(req, res) => {
    try {
        let result = await cancionesServicio.getTodasLasCanciones()
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        console.log("hubo un Error")
        res.status(500).json({ error: error.message });
    }
})












module.exports = router