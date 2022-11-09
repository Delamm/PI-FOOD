const { Router } = require("express");
const diets = require("./diets");
const recipesPOST = require("./recipesPOST");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/diets", diets);
router.use("/recipes", recipesPOST);

module.exports = router;
