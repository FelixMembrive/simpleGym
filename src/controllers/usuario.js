const { Usuario, Treino } = require("../models")

const UsuarioController = {
    index: async(req, res) => {
        const listarUsuarios = await Usuario.findAll({ include: Treino });
        res.json(listarUsuarios);
    },
    store: (req, res) => {
        res.json(req.body);
    },
    show: (req, res) => {
        const { id } = req.params;

        res.json({
            id,
            nome: "Felipe",
            email: "felipe@gmail.com",
            senha: "xxx2"
        });
    },

    show: async(req, res) => {
        const { id } = req.params;

        try {
            const usuario = await Usuario.findByPk(id, { include: Treino });

            if (usuario) {
                return res.json(usuario);
            }

            res.status(404).json({
                message: "Cliente não encontrado",
            });
        } catch (error) {
            res
                .status(500)
                .json({ error: "Oops, tivemos um erro, tente novamente." });
        }
    },




    update: (req, res) => {
        const { id } = req.params;

        res.json({
            id,
            ...(req.body || {}),
        });
    },
    destroy: (req, res) => {
        res.status(204).send("");
    },
};

module.exports = UsuarioController;