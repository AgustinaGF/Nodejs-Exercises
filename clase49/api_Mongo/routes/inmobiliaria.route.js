const inmobiliariaService = require("../services/inmobiliaria.service")

module.exports = function(server) {
    server.get("/inmueble", async(req, res) => {
        let inmuebles = await inmobiliariaService.getInmuebles();
        res.json(inmuebles)
    })
    server.post("/inmueble", async(req, res) => {
        let inmueble = req.body;
        try {
            let nuevoInmueble = await inmobiliariaService.crearInmueble(inmueble)
            res.status("201").json(nuevoInmueble)
        } catch (err) {
            res.status(409).json({ error: err.message })
        }
    })
    server.get("/inmueble/:id", async(req, res) => {
        let idInmueble = req.params.id
        try {
            let resultado = await inmobiliariaService.getInmuebleById(idInmueble)
            res.status(200).json(resultado)
        } catch (err) {
            res.status(404).json({ error: err.message })
        }
    })
    server.put("/inmueble/:id", async(req, res) => {
        let idInmueble = req.params.id
        let data = req.body
        try {
            let resultado = await inmobiliariaService.modificaInmbueble(idInmueble, data)
            res.status(200).json(resultado)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    })
    server.delete("/inmueble/:id", async(req, res) => {
        let idInmueble = req.params.id
        try {
            let resultado = await inmobiliariaService.eliminarInmueble(idInmueble)
            res.status(200).send(resultado)
        } catch (error) {
            res.status(404).json({ error: error.message })
        }
    })
}