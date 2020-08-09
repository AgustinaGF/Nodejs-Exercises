const autorRoute = require("./routes/autor.route")
const libroRoute = require("./routes/libro.route")
const express = require("express")
const server = express()
server.use(express.json())


autorRoute(server)
libroRoute(server)

server.listen(3000, () => {
    console.log("Server Init...")
})