// backend/controllers/infoController.js
const Info = require('../models/info');

// Controlador para obtener toda la información
exports.getAllInfo = async (req, res) => {
    try {
        const info = await Info.find();
        res.json(info);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para obtener un elemento de información por su ID
exports.getInfoById = async (req, res) => {
    try {
        const info = await Info.findById(req.params.id);
        if (!info) {
            return res.status(404).json({ message: 'Información no encontrada' });
        }
        res.json(info);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Otros controladores pueden incluir la creación, actualización y eliminación de la información según sea necesario
