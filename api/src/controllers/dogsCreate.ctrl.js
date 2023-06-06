const { Dog, Temperament } = require('../db.js');
const { Op } = require("sequelize");

const createDogCtrl = async (req, res) => {
    const { imagen, nombre, altura, peso, añosDeVida, temperamentos } = req.body;
    try {
        const newDog = await Dog.create({
            imagen, nombre, altura, peso, añosDeVida
        });

        for (const temperamento of temperamentos) {
            const temperamentoEncontrado = await Temperament.findOne({
                where: {
                    nombre: {
                        [Op.iLike]: temperamento
                    }
                }
            });

            if (temperamentoEncontrado) {
                await newDog.addTemperament(temperamentoEncontrado);
            } else {
                const nuevoTemperamento = await Temperament.create({ nombre: temperamento });
                await newDog.addTemperament(nuevoTemperamento);
            }
        }

        return res.status(201).json(newDog);
    } catch (error) {
        return res.status(500).json({ error: `No se pudo crear el animal: ${error.message}` });
    }
};

module.exports = createDogCtrl;