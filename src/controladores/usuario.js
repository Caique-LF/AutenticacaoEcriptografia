const pool = require("../conexao/conexoes");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../senhaJwt')

const listarUsuario = async (req, res)=>{

};

const cadastrarUsuario = async (req, res)=>{
    const {nome, email, senha} = req.body

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const query = 'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *'
        const params = [nome, email, senhaCriptografada]

        const novoUsuario = await pool.query(query, params)

        return res.status(201).json(novoUsuario.rows)
    } catch (error) {
        return res.status(500).json({mensagem : error.message})
    }
};

const loginUsuario = async (req, res)=>{
    const {email, senha} = req.body

    try {
        const usuario = await pool.query('select * from usuarios where email = $1',[email])

        if(usuario.rowCount < 1){
            return res.status(404).json({mensagem : "Email ou senha invalida"})
        };

        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)

        if(!senhaValida){
            return res.status(404).json({mensagem : "Email ou senha invalida"})
        };

        const token = jwt.sign({id: usuario.rows[0].id}, senhaJwt, {expiresIn: '8h'})
        const {senha: _, ...usuarioLogado} = usuario.rows[0]

        return res.status(200).json({ usuario: usuarioLogado, token})

    } catch (error) {
        return res.status(500).json({mensagem : error.message})
    }

}

module.exports = {
    listarUsuario,
    cadastrarUsuario,
    loginUsuario
};

