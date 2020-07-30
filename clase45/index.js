const express = require("express")
const server = express()

server.use(express.json())
server.use(log)

server.get("/demo", (req, res) => {
    res.status(200).send("perfecto")
})
server.post("/contacto", validarDatos, (req, res) => {
    res.status(200).send("perfecto")
})

function validarDatos(req, res, next) {
    const { nombre, apellido, mail } = req.body
    if (!nombre || !apellido || !mail) {
        res.status(404).json("falta informacion")
    } else {
        next()
    }
}

function log(req, res, next) {
    console.log(req.method)
    console.log(req.url)
    console.log(req.query)
    console.log(req.body)
    next()
}
server.use((err, req, res, next) => {
    if (!err) {
        return next()
    } else {
        console.log(err)
        res.status(500).send("Se ha producido un error inesperado")
    }
})

server.listen(3000, (req, res) => {
    console.log("Server Init...")
})