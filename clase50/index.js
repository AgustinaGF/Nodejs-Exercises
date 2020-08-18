const express = require("express");
const server = express();
const Sequelize = require("sequelize")
const sql = new Sequelize("mysql://root@localhost:3306/miArtistaFavorito")
const cancionesRoute = require("./routes/canciones.route")

server.use(express.json())

// routes
server.use("/canciones", cancionesRoute);



server.listen(3000, () => {
    console.log("server is ready")
})