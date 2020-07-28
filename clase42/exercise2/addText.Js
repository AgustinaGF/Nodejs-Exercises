const FS = require("fs")

module.exports.textAdd = function(filename) {
    let fileName = filename;
    let exitFilename = FS.existsSync(fileName)
    if (!exitFilename) {
        FS.writeFileSync(fileName, "")
    }
    FS.writeFile(fileName, "texto placeholder", (error) => {
        if (error) {
            console.log(error)
        }
    })
    FS.readFile(fileName, (error, data) => {
        if (error) {
            console.log(error)
            return
        } else {
            console.log(data)
            let placeholder = data.toString().toUpperCase();
            FS.writeFileSync(fileName, placeholder)
        }
    })
}