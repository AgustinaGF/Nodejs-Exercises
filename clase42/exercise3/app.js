const FS = require("fs")
const CALCULADORA = require("./calculator.js")
    // const calculator = require("./calculator.js")

console.log(CALCULADORA.sumar(20, 30))
console.log(CALCULADORA.restar(10, 5))

CALCULADORA.resultados(CALCULADORA.sumar(20, 50))