const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsCtrl = require('../controllers/dogs.ctrl');
const dogsIdCtrl = require('../controllers/dogsId.ctrll');
const dogsNameCtrl = require('../controllers/dogsName.ctrl');
const createDogCtrl = require('../controllers/dogsCreate.ctrl');
const temperamentsCtrl = require('../controllers/Temperaments.ctrl');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', dogsCtrl);
router.get('/dogs/:idRaza', dogsIdCtrl);
router.get('/dogs/name', dogsNameCtrl);
router.post('/dogs', createDogCtrl);

router.get('/temperaments', temperamentsCtrl);

module.exports = router;