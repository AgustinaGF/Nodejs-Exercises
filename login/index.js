const usuariosRoute = require("./routes/usuarios.route")
const express = require("express")
const server = express()

server.use(express.json())
usuariosRoute(server)


server.listen(3000, () => {
    console.log("servidor inicializado...")
})