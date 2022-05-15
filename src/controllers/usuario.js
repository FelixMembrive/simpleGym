const UsuarioController = {
    index: (req, res) => {
        res.json([{
            id: `1`,
            nome: "Felix",
            email: "felix@gmail.com",
            senha: "xxxx"
        }, {
            id: `2`,
            nome: "Felipe",
            email: "felipe@gmail.com",
            senha: "xxx2"
        }, ]);
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