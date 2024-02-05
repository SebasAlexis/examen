const User = require("../models/user");
const usersController = {};


usersController.getUsers = async (req, res) => {
    res.send("Bienvenido al backend de Gestion de usuarios 2.0");
    //let users = await User.find();
    //console.log(users);
    //return res.status(200).json(users);
};

usersController.addUser = async (req, res) => {
    //res.send("Registro de nuevo usuario");
    const { email, password } = req.body;
    const newUser = new User({ email: email, password: password });
    console.log(newUser);
    await newUser.save();
    const token = jwt.sign({
        _id: newUser._id
    }, 'secretkey');
    res.status(200), json({ token });
};

usersController.loginUser = async (req,res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) return
    res.status(401).send("El correo no existe");
    if (user.password != password) return
    res.status(401).send("Clave incorrecta");
    const
        token = jwt.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token });
}

module.exports = usersController;
