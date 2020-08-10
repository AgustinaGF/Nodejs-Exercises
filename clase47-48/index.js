const express = require("express")
const server = express()
const jwt = require("jsonwebtoken")
const SECRET_JWT = "secreto"
var usuarios = [{
        id: 1,
        userName: "Agf",
        nombre: "agus",
        password: "1234",
        roles: [
            "ADMIN",
            "NORMAL_USER"

        ]
    },
    {
        id: 2,
        userName: "elop",
        nombre: "emilia",
        password: "123456",
        roles: [
            "NORMAL_USER"

        ]
    }
]

server.use(express.json())

server.post("/login", (req, res) => {
        let user = req.body;
        let findUser = usuarios.find(r => r.userName == user.userName && r.password == user.password)
        if (!findUser) {
            res.status(400).json({
                message: "invalid user or password"
            })
        }
        let token = jwt.sign({
            // esta es la info que paso dentro del token
            id: findUser.id,
            nombre: findUser.nombre
        }, SECRET_JWT)
        res.status(200).send(token)
    })
    // middleware
    // function autorizar(req, res, next) {
    //     let token = req.headers["autorizacion"].split(" ")[1]
    //     console.log(token)
    //     let user = null;
    //     try {
    //         user = jwt.verify(token, SECRET_JWT)
    //         console.log(user)
    //     } catch (er) {
    //         res.status(401).send("No tenes el acceso permitido")
    //         return
    //     }


//     next()

// }

// para autorizar segun roles
let autorizar = (rolesRequeridos) => (req, res, next) => {
    let token = req.headers["autorizacion"].split(" ")[1]
    console.log(token)
    let user = null;
    try {
        user = jwt.verify(token, SECRET_JWT)
        console.log(user)
    } catch (er) {
        res.status(401).send("No tenes el acceso permitido")
        return
    }
    let findUser = usuarios.find(r => r.id == user.id)
    let tieneRol = false;
    if (rolesRequeridos && rolesRequeridos.length != 0) {
        for (let i = 0; i < rolesRequeridos.length; i++) {
            const rol = rolesRequeridos[i];
            if (findUser.roles.includes(rol)) {
                tieneRol = true
            }
        }
        if (!tieneRol) {
            res.status(401).send("No estas autorizado")
        }
    }

    next()

}

server.get("/normal_user", autorizar(), (req, res) => {
        res.send("Solo podes leer esto si estas logeado")
    })
    // Solo para los usuarios con rol ADMIN
server.get("/cerrado", autorizar(["ADMIN"]), (req, res) => {
    req.
    res.send("Sos un usuario con Rol de ADMIN, podes leer esto")

})
server.listen(3000, () => {
    console.log("server init...")
})