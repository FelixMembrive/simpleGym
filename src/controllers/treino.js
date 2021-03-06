const { Treino } = require("../models/")

const TreinoController = {
    index: async(req, res) => {
        const listarTreinos = await Treino.findAll();
        res.json(listarTreinos);
    },

    store: (req, res) => {
        res.json(req.body);
    },
    show: (req, res) => {
        const { id } = req.params;

        res.json({
            id,
            descricao: "Peitoral",
            usuario_id: "2"
        });
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

module.exports = TreinoController;