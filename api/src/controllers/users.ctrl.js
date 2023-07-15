const { User } = require('../db');

const usersCtrl = async (req, res) => {
    try {
        const response = await User.findAll()
        const users = response.data

        if (!response.length) {
            return res.status(500).json({ message: `No hay usuarios registrados en la base de datos.` })
        }

        return res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: error.message })
    }
}

module.exports = usersCtrl;