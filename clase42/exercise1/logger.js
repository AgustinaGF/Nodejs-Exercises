const fs = require("fs")
module.exports.logger = function(filename, message) {
    let fileName = "./logs/" + filename;
    let exitFilename = fs.existsSync(fileName)
    if (!exitFilename) {
        fs.writeFileSync(fileName, "")
    }
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.error("error on get file" + fileName)
            return
        }
        let texto = data.toString();
        let fecha = (new Date()).toString()
        texto += "\n" + fecha + " " + message
        fs.writeFileSync(fileName, texto)
    })
}