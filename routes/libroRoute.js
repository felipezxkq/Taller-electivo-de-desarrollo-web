'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var libroController = require('../controllers/libroController');
// var autoController = require('../controllers/autoController');

// Llamamos al router
var api = express.Router();
 
//  Guardar libro
api.post('/libros', libroController.guardar);
api.get('/libros', libroController.todos);
api.get('/librobyID/:id', libroController.buscarPorID);
api.get('/buscarLibro/:ano_publicacion/:idioma', libroController.buscar);
api.put('/libro/modificar/:id', libroController.modificar);
api.delete('/libro/eliminar/:id', libroController.eliminar);

// api.post('/autoguardar',autoController.guardar);

// Exportamos la confi,guración
module.exports = api;