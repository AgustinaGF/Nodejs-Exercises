const autorRoute = require("./routes/autor.route")
const express = require("express")
const server = express()
server.use(express.json())

autorRoute(server)

server.listen(3000, () => {
    console.log("Server Init...")
})