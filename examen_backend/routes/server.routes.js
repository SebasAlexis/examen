// backend/routes/infoRoutes.js
const express = require('express');
const router = express.Router();
const infoController = require('../controllers/info.controllers');

// Ruta para obtener toda la información
router.get('/', infoController.getAllInfo);

// Ruta para obtener un elemento de información por su ID
router.get('/:id', infoController.getInfoById);

// Otros endpoints pueden incluir rutas para la creación, actualización y eliminación de información

module.exports = router;
