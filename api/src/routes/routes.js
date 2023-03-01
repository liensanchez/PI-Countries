const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRoutes = require("./countries.routes")
const activitiesRoutes = require("./activities.routes")

const router = Router();

// Configurar los routers
router.use('/countries', countriesRoutes )

router.use('/activities', activitiesRoutes )

module.exports = router;
