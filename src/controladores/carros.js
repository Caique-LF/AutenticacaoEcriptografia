const pool = require('../conexao/conexoes');

const listarCarros = async (req, res)=>{
    try {
        const {rows} = await pool.query('select * from carros')

        return res.status(200).json(rows)

    } catch (error) {
        return res.status(500).json({menssagem: "Erro interno no servidor"})
    }
};


const detalharCarro = async (req, res)=>{
    const {id} = req.body

    try {
        const {rows, rowCount} = await pool.query('select * from carros where id = $1', [id])

        if (rowCount < 1){
            return  res.status(404).json({mensagem: "Carro não encontrado"})
        }

        return res.status(200).json(rows[0])

    } catch (error) {
        return res.status(500).json({menssagem: "Erro interno no servidor"})
    }
};

const cadastrarCarros = async (req, res)=>{

};

module.exports = {
    listarCarros
}