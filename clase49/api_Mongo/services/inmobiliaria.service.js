const mongoose = require("mongoose")
const inmobiliaria = require("../db/datastore")

// funcion que me va a devolver todos los inmuebles que tenga

module.exports.getInmuebles = async function() {
    let resultado = await inmobiliaria.find((err, res) => {
        return res
    })
    return resultado
}

module.exports.crearInmueble = async function(inmueble) {
    let resultado = await inmobiliaria.find({ datosDelPropietario: inmueble.datosDelPropietario, direccion: inmueble.direccion }, (err, res) => {
        return res
    })
    if (resultado.length > 0) {
        throw new Error("Ya existe ese inmueble")
    }
    let modelo = {
        tipoDeOperacion: inmueble.tipoDeOperacion,
        tipoDeInmueble: inmueble.tipoDeInmueble,
        direccion: inmueble.direccion,
        fotos: inmueble.fotos,
        ambientes: inmueble.ambientes,
        metrosCuadrados: inmueble.metrosCuadrados,
        descripcion: inmueble.descripcion,
        datosDelPropietario: inmueble.datosDelPropietario,
    }
    let nuevoInmueble = await new inmobiliaria(modelo).save()
    return nuevoInmueble
}

module.exports.getInmuebleById = async function(idInmueble) {
    let resultado = await inmobiliaria.findById(idInmueble, (err, res) => {
        return res
    })
    return resultado
}
module.exports.modificaInmbueble = async function(idInmueble, data) {
    let resultado = await inmobiliaria.updateOne({ _id: idInmueble }, data)
    if (resultado.ok != 1) {
        throw new Error("No se pudo Modificar el inmueble requerido")
    }
    return await inmobiliaria.find({ _id: idInmueble }, (err, res) => {
        return res
    })
}

module.exports.eliminarInmueble = async function(idInmueble) {
    let resultado = await inmobiliaria.deleteOne({ _id: idInmueble })
    if (resultado.deletedCount == 1) {
        return "Inmueble Eliminado"
    } else {
        throw new Error("No se borro el inmueble ")
    }
}