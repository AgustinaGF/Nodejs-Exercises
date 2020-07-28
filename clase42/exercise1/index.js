const fs = require("fs")
console.log("hola mundo")
console.log(fs.readdirSync("./"))
const lg = require("./logger")

lg.logger("users.txt", "error fatal")
lg.logger("text.txt", "prueba de log")
lg.logger("errores.txt", "error fatal en el sistema")