const express = require('express')
const server = express()
const alumno = require("./modules/alumnos")
server.get("/alumnos", (req, res) => {
    let result = alumno.getAlumnos()
    res.status(200)
    res.json(result)
})
server.get('/alumnos/:comision', (req, res) => {
    let data = req.params
    let result = alumno.getAlumnosBycomision(data)
    res.status(200)
    res.json(result)
})

server.get('/alumnos/:comision/alumnos/:id', (req, res) => {
    let data = req.params

    let result = alumno.getAlumnoscomisionById(data)
    console.log(result)
    if (result) {
        res.status(200)
        res.json(result)
    } else {
        res.status(404)
        res.send("No se encontro usuario")
    }
})

server.listen(3000, () => {
    console.log("servidor inicializado...")
})