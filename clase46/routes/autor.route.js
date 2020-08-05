 const autorService = require("../services/autor.services")

 module.exports = function(server) {

     server.get("/autores", (req, res) => {
         let autores = autorService.getAutores();
         res.json(autores)
     })

     server.post("/autores", (req, res) => {
         let autor = req.body;
         try {
             let autorNuevo = autorService.createAutor(autor);
             res.status("201").json(autorNuevo)
         } catch (err) {
             res.status("409").json({ error: err.message })
         }
     })
 }