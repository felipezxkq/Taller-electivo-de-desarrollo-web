'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Usuario = require('../modelos/usuario.js');
const servicio = require('.../servicios/index')

function guardar(req, res) {

    // Devolvemos una respuesta en JSON

    let usuario = new Usuario({
        usuario = req.body.usuario,
        mail = req.body.mail,
        pass = req.body.pass

    })
 

    usuario.save((err, usuariorstore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ "mensaje":"creado correctamente", 'usuario': usuariostore })

    })
}

function validar(req,res){

    var password = req.body.pass;
   
    Usuario.findOne({'mail': req.body.mail}, (err,user)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!usuario) return res.status(404).send({message:'Error usuario no existe'})

        bcrypt.compare(password, user.pass, function(error, isMatch) {
            if (error){
                res.status(500).send('Error al validar usuario> ${error}')
            } else if (!isMatch) {
                res.status(401).send({ 'mensaje' : 'incorrecto'})
            } else {
                res.status(200).send({ 'mensaje' : 'correcto', 'token':servicio.createToken(user)})
            }
        })
         
     })

}

module.exports = {
    guardar
    
};
