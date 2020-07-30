const express = require("express")
const server = express()

const alumnos = require("./modules/alumnos")

server.get("/acamica/dwfs/alumnos", (req, res) => {
        let result = alumnos.getAlumnos()
        res.status(200)
        res.json(result)
    })
    // funcion para que me traiga alumnos por id
    // server.get("/acamica/dwfs/alumnos/:id", (req, res) => {
    //     let data = req.params
    //     let result = alumnos.getAlumnosById(data)
    //     if (result) {
    //         res.status(200)
    //         res.json(result)
    //     } else {
    //         res.status(404).send("el Id es invalido")
    //     }
    // })

server.get("/acamica/:comision/alumnos/:id", (req, res) => {
    let data = req.params
    let resultado = alumnos.getAlumnosComisionById(data)
    if (resultado) {
        res.status(200)
        res.json(resultado)
    } else {
        res.status(404).send("No se ha encontrado alumno con esos datos")
    }
})

server.delete("/acamica/:comision/alumnos/:id", (req, res) => {
    let data = req.params
    let resultado = alumnos.getAlumnosComisionById(data)
    if (!resultado) {
        res.status(404).send("No fue posible eliminar a alumno porque no se ha encontrado alumno con esos datos")
    } else {
        let delet = alumnos.deleteAlumno(resultado)
        res.status(200).send("el alumno fue eliminado con exito")
    }

})

server.listen(3000, () => {
    console.log("Servidor Inicializado")
})