'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var usuarioController = require('../controllers usuarioController');
// var autoController = require('../controllers/autoController');

// Llamamos al router
var api = express.Router();
 
//  Guardar libro
api.post('/crearusuario', usuarioController.gsave);
api.postt('/validar', usuarioController.validar);

// api.post('/autoguardar',autoController.guardar);

// Exportamos la confi,guración
module.exports = api;