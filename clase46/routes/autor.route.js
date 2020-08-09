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
         //  get de autores porid
     server.get('/autores/:id', (req, res) => {
         let idAutor = req.params.id
         console.log(idAutor)
         try {
             let resultado = autorService.getAutorById(idAutor)
             res.status(200).json(resultado)
         } catch (error) {
             console.log(error)
             res.status(404).json({ error: error.message })
         }
     })
 }