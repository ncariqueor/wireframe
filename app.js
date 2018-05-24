'use strict';

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

// Cargas rutas

var article_routes = require('./routes/article');

// Congifurar Cabeceras http

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Se permite el acceso a todos los dominios
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Metodos HTTP comunes
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});


//Rutas base

app.use('/wireframe', article_routes);

//  Exportar modulo para usar en index.js

module.exports = app;