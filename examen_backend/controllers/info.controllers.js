const User = require("../models/info");
const usersController = {};

usersController.getUsers = async (req, res) => {
//   res.send("Bienvenido al backend de Gestion de usuarios 2.0");
  let users = await User.find();
  console.log(users);
  return res.status(200).json(users);
};

usersController.addUser = async (req, res) => {
//   res.send("Registro de nuevo usuario");
  const { email, password } = req.body;
  const newUser = new User({ email: email, password: password });
  console.log(newUser);
  await newUser.save();
};

module.exports = usersController;
