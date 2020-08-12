let idUsuario = 1;

module.exports = {
    usuarios: [

    ],
    agregarUsuario(usuario) {
        usuario.id = idUsuario
        this.usuarios.push(usuario)
        idUsuario++
        return usuario
    }
}