const axios = require('axios');
const { Dog } = require('../db.js')

const dogsCtrl = async (req, res) => {
    try {

        const response = await axios.get('https://api.thedogapi.com/v1/breeds')
        const dogs = response.data.map(el => ({
            // id: el.id,
            imagen: el.image?.url,
            nombre: el.name,
            altura: el.height?.imperial,
            peso: el.weight?.imperial,
            añosDeVida: el.life_span,
        }));

        for (const dog of dogs) {
            await Dog.findOrCreate({ where: { nombre: dog.nombre }, defaults: dog });
        }

        const responseDB = await Dog.findAll();

        return res.status(200).json(responseDB);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = dogsCtrl;