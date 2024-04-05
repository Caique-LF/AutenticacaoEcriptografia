const pool = require("../conexao/conexoes");
const bcrypt = require('bcrypt')

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

module.exports = {
    listarUsuario,
    cadastrarUsuario
};

