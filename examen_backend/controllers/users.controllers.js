const User = require('../models/user');

const userController = {};

userController.addUser = async (req, res) => {
  try {
    const { usuario, email, password } = req.body;

    // Verificar el dominio del correo
    if (!email.endsWith('@ups.edu.ec')) {
      return res.status(400).json({ success: false, message: 'El correo debe ser de dominio ups.edu.ec' });
    }

    // Verificar la longitud mínima de la clave
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'La clave debe tener al menos 6 caracteres' });
    }

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new User({ usuario, email, password });

    // Guardar el usuario en la base de datos
    await newUser.save();

    // Si llegamos aquí, el registro fue exitoso
    res.status(201).json({ success: true, message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
};

module.exports = userController;
