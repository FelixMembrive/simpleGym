const { DiaTreino, Treino } = require("../models/")

const DiaTreinoController = {
    index: async(req, res) => {
        // const listarDiaTreinos = await DiaTreino.findAll({ include: Treino });
        const listarDiaTreinos = await DiaTreino.findAll();
        res.json(listarDiaTreinos);
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

module.exports = DiaTreinoController;