const { Schema, model } = require("mongoose")

const inmueblesSchemas = new Schema({
    tipoDeOperacion: String,
    tipoDeInmueble: String,
    direccion: String,
    fotos: String,
    ambientes: Number,
    metrosCuadrados: Number,
    descripcion: String,
    datosDelPropietario: String,
})
module.exports = model('inmueble', inmueblesSchemas)