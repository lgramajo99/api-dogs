const axios = require('axios');
const { Dog, Temperament } = require('../db.js');

const dogsCtrl = async (req, res) => {
    try {
        // Obtener los datos de los perros de la API externa
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const dogsData = response.data;

        for (const dogData of dogsData) {
            // Extraer los temperamentos y dividirlos en un array si existen
            const temperamentos = dogData.temperament ? dogData.temperament.split(', ') : [];

            // Buscar o crear un perro en la base de datos por su nombre
            const [dog, created] = await Dog.findOrCreate({
                where: { nombre: dogData.name },
                defaults: {
                    imagen: dogData.image?.url,
                    nombre: dogData.name,
                    altura: dogData.height?.imperial,
                    peso: dogData.weight?.imperial,
                    añosDeVida: dogData.life_span
                }
            });

            // Si el perro ya existía, actualizar los datos con los nuevos datos extraídos
            if (!created) {
                await dog.update({
                    imagen: dogData.image?.url,
                    altura: dogData.height?.imperial,
                    peso: dogData.weight?.imperial,
                    añosDeVida: dogData.life_span
                });
            }

            // Iterar sobre cada temperamento y buscarlo o crearlo en la base de datos
            for (const temperamento of temperamentos) {
                const [temperament, _] = await Temperament.findOrCreate({
                    where: { nombre: temperamento.trim() }
                });

                // Asociar el temperamento encontrado con el perro correspondiente
                await dog.addTemperament(temperament);
            }
        }

        // Consultar los perros de la base de datos, incluyendo los temperamentos asociados
        const responseDB = await Dog.findAll({
            include: [{
                model: Temperament,
                attributes: ['nombre'], // Incluir solo el atributo 'nombre' del modelo Temperament
                through: { attributes: [] } // Evitar incluir atributos adicionales de la tabla intermedia
            }]
        });

        return res.status(200).json(responseDB);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = dogsCtrl;
