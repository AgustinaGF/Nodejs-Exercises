const express = require("express")
const server = express()
const jwt = require("jsonwebtoken")
const SECRET_JWT = "secreto"
var usuarios = [{
    id: 1,
    nombre: "Agus",
    password: "1234"
}]

server.use(express.json())

server.post("/login", (req, res) => {
    let user = req.body;
    let findUser = usuarios
        .find(r => r.userName == user.userName && r.password == user.password)
    if (!findUser) {
        res.status(400).json({
            message: "invalid user or password"
        })
    }
    let token = jwt.sign({
        id: findUser.id
    }, SECRET_JWT)
    res.status(200).send(token)
})

function autorizar(req, res, next) {
    let token = req.headers["autorizacion"].split(" ")[1]
    console.log(token)
    try {

        let user = jwt.verify(token, SECRET_JWT)
        console.log(user)
    } catch (er) {
        resizeTo.status(401).send("ojooo")
    }


    next()

}

server.get("/abierto", (req, res) => {
    res.send("todo ok")
})
server.get("/cerrado", autorizar, (req, res) => {
    req.
    res.send("solo para usuarios")

})
server.listen(3000, () => {
    console.log("server init...")
})