const express = require('express');
const { cadastrarUsuario, listarUsuario, loginUsuario } = require('./controladores/usuario');

const rotas = express();

rotas.get('/usuario', listarUsuario)
rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', loginUsuario)
module.exports = rotas