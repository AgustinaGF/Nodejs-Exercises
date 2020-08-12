const mongoose = require("mongoose")

const express = require("express")
const server = express()

const Usuarios = mongoose.model('usuarios', {
    nombre: String,
    apellido: String,
    edad: Number,
})

let misDatos = { nombre: "Agus", apellido: "Gomez", edad: "27" }
const objetoUsuario = new Usuarios(misDatos)
objetoUsuario.save();


// buscar en la base de datos y que me devuelva todos los registros
Usuarios.find().then(function(resultado) {
    console.log(resultado)
})

// funcion que me permite sobreescribir el objeto
// Usuarios.findOne({ 'nombre': new RegExp('agus', 'i') }).then(function(resultados) {
//         resultados.nombre = "Maria"
//         resultados.save();
//     })
// funcion que me permite borrar un registro de la base de datos
Usuarios.deleteOne({ 'nombre': new RegExp('agus', 'i') }, function(err, res) {
    console.log(res)
})

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