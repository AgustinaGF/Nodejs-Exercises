// constantes
const inmobiliariaRoutes = require("./routes/inmobiliaria.route")
const express = require("express")
const mongoose = require("mongoose")
const server = express()

// middlewares
server.use(express.json())

inmobiliariaRoutes(server)

async function initServer() {

    mongoose.connect("mongodb://localhost:27017/Acamica-Exercise").then(r => {
        server.listen(3000, () => {

            console.log("Server Init...")
        })

    }).catch(error => {
        console.log("No pude conectar a la Base de Datos")
    })
}
initServer()