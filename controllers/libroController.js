'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Libro = require('../models/libro.js');

// Creamos un método en el controlador, en este caso una accion de pruebas
function guardar(req, res) {
    let libro = new Libro()
    libro.nombre = req.body.nombre
    libro.autor = req.body.autor
    libro.ano_publicacion = req.body.ano_publicacion
    console.log("Tratando de guardar")
    console.log(req.body.nombre)
    libro.idioma = req.body.idioma
    libro.save((err, librostore) => {

        if (err) return res.status(401).send(`Error base de datos> ${err}`)
        res.status(200).send({ libro: librostore })

    })
}

function buscar(req, res) {
    let ano_publicacionreq = req.query.ano_publicacion
    let idiomareq = req.query.idioma
    Libro.find({ ano_publicacion: ano_publicacionreq , idioma : idiomareq }, (err, libro) => {
        if (!libro) return res.status(404).send({ message: 'Error libro no existe' })
        res.status(200).send({ libro })
    })

}

function buscarPorID(req, res) {
    let idlibro = req.params.id
    Libro.findById(idlibro,(err,libro)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!libro) return res.status(404).send({message:'Error libro no existe'})

         res.status(200).send({libro})
     })
}

function eliminar(req, res) {
    let idlibro = req.params.id
    Libro.findByIdAndDelete(idlibro,(err,libro)=>{
        if(err) return res.status(500).send({message:'Error al eliminar libro'})
        if(!libro) return res.status(404).send({message:'Error libro no existe'})

         res.status(200).send({libro})
     })
}

function modificar(req, res) {
    let idlibro = req.params.id
    let nombrereq = req.body.nombre
    let autorreq = req.body.autor
    let ano_publicacionreq = req.body.ano_publicacion
    let idiomareq = req.body.idioma

    console.log("Tratando de modificar")

    Libro.findByIdAndUpdate(idlibro, {
        "nombre" : nombrereq,
        "autor" : autorreq,
        "ano_publicacion" : ano_publicacionreq,
        "idioma" : idiomareq
    },(err,libro)=>{
        if(err) return res.status(500).send({message:'Error al modificar libro'})
        if(!libro) return res.status(404).send({message:'Libro no encontrado'})

        res.status(200).send({libro})
     })

}

function todos(req, res) {
    Libro.find({},(err,libro)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!libro) return res.status(404).send({message:'Error libro no existe'})

         res.status(200).send({libro})
     })
}


// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
module.exports = {
    guardar,
    buscar,
    buscarPorID,
    todos,
    modificar, eliminar
    
};
