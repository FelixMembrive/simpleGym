const express = require("express");
const router = express.Router();

const TreinoController = require("../controllers/treino");
router.get("/treino", TreinoController.index);
router.post("/treino", TreinoController.store);
router.get("/treino/:id", TreinoController.show);
router.put("/treino/:id", TreinoController.update);
router.delete("/treino/:id", TreinoController.destroy);

const UsuarioController = require("../controllers/usuario");
router.get("/usuario", UsuarioController.index);
router.post("/usuario", UsuarioController.store);
router.get("/usuario/:id", UsuarioController.show);
router.put("/usuario/:id", UsuarioController.update);
router.delete("/usuario/:id", UsuarioController.destroy);

const DiaTreinoController = require("../controllers/diatreino");
router.get("/diatreino", DiaTreinoController.index);
router.post("/diatreino", DiaTreinoController.store);
router.get("/diatreino/:id", DiaTreinoController.show);
router.put("/diatreino/:id", DiaTreinoController.update);
router.delete("/didiatreinoas/:id", DiaTreinoController.destroy);


// router.get("/", "Teste de Mensagem");


module.exports = router;