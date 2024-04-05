const express = require('express');
const { cadastrarUsuario, listarUsuario, loginUsuario } = require('./controladores/usuario');
const { listarCarros } = require('./controladores/carros');

const rotas = express();

rotas.get('/usuario', listarUsuario)
rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', loginUsuario)


rotas.get('/carros', listarCarros);


module.exports = rotas