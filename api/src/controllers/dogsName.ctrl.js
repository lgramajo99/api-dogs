const axios = require('axios');
const { Dog } = require('../db.js');
const { Op } = require('sequelize');


const dogsNameCtrl = async (req, res) => {
    const nombre = req.query.name;

    try {
        const responseDB = {
            where: {
                nombre: {
                    [Op.iLike]: `%${nombre}%`
                }
            }
        }
        const dogsDB = await Dog.findAll(responseDB)

        const responseApi = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogsApi = responseApi.data.filter(el => el.name.toLowerCase().includes(nombre.toLowerCase()))


        if (!dogsDB.length && !dogsApi.length) {
            throw new Error(`La raza con el nombre "${nombre}" no fue encontrado`);
        }

        const respuesta = [...dogsDB, ...dogsApi]
        return res.status(200).json(respuesta)
    } catch (error) {

        return res.status(500).json({ message: error.message })
    }
}

module.exports = dogsNameCtrl;