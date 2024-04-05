const express = require('express');
const { cadastrarUsuario, listarUsuario, loginUsuario } = require('./controladores/usuario');
const { listarCarros, detalharCarro, cadastrarCarros, atualizarCarro, excluirCarro } = require('./controladores/carros');

const rotas = express();

rotas.get('/usuario', listarUsuario)
rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', loginUsuario)


rotas.get('/carros', listarCarros);
rotas.get('/carros/:id', detalharCarro);
rotas.post('/carros', cadastrarCarros)
rotas.put('/carros/:id', atualizarCarro)
rotas.delete('/carros/:id', excluirCarro)

module.exports = rotas