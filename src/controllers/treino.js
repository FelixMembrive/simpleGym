const TreinoController = {
    index: (req, res) => {
        res.json([{
            id: `1`,
            descricao: "Panturrilha",
            usuario_id: "2"
        }, {
            id: `4`,
            descricao: "Peitoral",
            usuario_id: "2"
        }, ]);
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