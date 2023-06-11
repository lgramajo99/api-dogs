const { User } = require('../db.js');


const createUserCtrl = async (req, res) => {
    const { username, email, password, fullName, isAdmin } = req.body;
    try {
        const newUser = await User.create({
            username, email, password, fullName, isAdmin
        })

        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ message: `No se pudo crear el usuario` })
    }
}

module.exports = createUserCtrl;