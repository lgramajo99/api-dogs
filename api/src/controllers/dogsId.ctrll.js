const axios = require('axios');
const { Dog, Temperament } = require('../db.js');
const { Op } = require('sequelize');

const dogsIdCtrl = async (req, res) => {
    const id = req.params.idRaza;
    try {
        let dogDB = await Dog.findOne({
            where: {
                id: {
                    [Op.iLike]: id
                }
            },
            include: [{
                model: Temperament,
                attributes: ['nombre'], // Incluir solo el atributo 'nombre' del modelo Temperament
                through: { attributes: [] } // Evitar incluir atributos adicionales de la tabla intermedia
            }]
        })

        if (!dogDB) {
            const response = await axios.get('https://api.thedogapi.com/v1/breeds')
            const dogApi = response.data.filter(el => el.id == id);

            if (!dogApi.length) {
                throw new Error(`No se puedo encontrar la raza con el id: ${id}`)
            }
            dogDB = dogApi
        }

        return res.status(200).json(dogDB);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = dogsIdCtrl;