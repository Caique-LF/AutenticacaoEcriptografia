const express = require('express');
const { cadastrarUsuario, listarUsuario } = require('./controladores/usuario');

const rotas = express();

rotas.get('/usuario', listarUsuario)
rotas.post('/usuario', cadastrarUsuario)
module.exports = rotas