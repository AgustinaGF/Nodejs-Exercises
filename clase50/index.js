const express = require("express");
const server = express();
const cancionesRoute = require("./routes/canciones.route")


server.use(express.json())

// routes
server.use("/canciones", cancionesRoute);


server.listen(3000, () => {
    console.log("server is ready")
})