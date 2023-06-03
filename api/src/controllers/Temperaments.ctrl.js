const { Temperament } = require('../db.js');
const axios = require('axios');

const temperamentsCtrl = async (req, res) => {
    try {
        // Realizar una solicitud GET a la API para obtener las razas de perro
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const temperamentsSet = new Set();

        response.data.forEach(t => {
            const temperaments = t.temperament?.split(', ').map(temp => temp.trim()) || [];
            temperaments.forEach(temp => {
                temperamentsSet.add(temp);
            });
        });

        const breeds = [...temperamentsSet].map(temp => ({ nombre: temp }));

        // Crear o encontrar los temperamentos en la base de datos
        for (const breed of breeds) {
            await Temperament.findOrCreate({ where: { nombre: breed.nombre }, defaults: breed });
        }

        const foundDog = response.data.map(dog => ({ nombre: dog.name }))

        return res.status(200).json(breeds);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = temperamentsCtrl;
