const FS = require("fs")


function sumar(numero1, numero2) {
    let resultadoSuma = numero1 + numero2;
    return `${numero1} + ${numero2} = ${resultadoSuma} `
}

function restar(numero1, numero2) {
    let resultadoResta = numero1 - numero2;
    return `${numero1}- ${numero2}= ${resultadoResta}`
}

function dividir(numero1, numero2) {
    let resultadoDivision = numero1 / numero2;
    return `${numero1} / ${numero2}= ${resultadoDivision}`
}

function multiplicar(numero1, numero2) {
    let resultadoMultiplicacion = numero1 * numero2;
    return `${numero1} * ${numero2}= ${resultadoMultiplicacion}`
}

function resultados(calculo) {

    let fileName = "resultados.txt"
    let exitFilename = FS.existsSync(fileName)
    if (!exitFilename) {
        FS.writeFileSync(fileName, "")
    }

    FS.writeFileSync(fileName, calculo)
}

module.exports = {
    sumar: sumar,
    restar: restar,
    dividir: dividir,
    multiplicar: multiplicar,
    resultados: resultados
}