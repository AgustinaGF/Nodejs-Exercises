const usuarioService = require("../services/usuario.services")

module.exports = function(server) {
    server.get("/usuarios", (req, res) => {
        let usuarios = usuarioService.getUsuario();
        res.json(usuarios)
    })
    server.post("/usuarios", validarDatos, (req, res) => {
        // lo que viene en body va a ser el usuario
        let usuario = req.body;
        try {
            let usuarioNuevo = usuarioService.crearUsuario(usuario);
            res.status("200").json(usuarioNuevo)
        } catch (error) {
            res.status("409").json({ error: error.message })
        }
    })
    server.put("/usuarios/:mail", (req, res) => {
        let emailUsuario = req.params.mail
        let data = req.body
        console.log(emailUsuario)
        try {
            let resultado = usuarioService.modificarUsuario(emailUsuario, data)
            res.status(200).json(resultado)
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: error.message })
        }
    })

}

function validarDatos(req, res, next) {
    const { nombre, apellido, mail, contrasenia } = req.body
    if (!nombre || !apellido || !mail || !contrasenia) {
        res.status(404).json("falta informacion")
    } else {
        next()
    }
}