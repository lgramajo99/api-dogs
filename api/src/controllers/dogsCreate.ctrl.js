const { Dog, Temperaments } = require('../db.js');
const { Op } = require("sequelize");

const createDogCtrl = async (req, res) => {
    const { imagen, nombre, altura, peso, añosDeVida, temperamentos } = req.body;
    try {
        const newDog = await Dog.create({
            imagen, nombre, altura, peso, añosDeVida
        })

        if (temperamentos && temperamentos.length > 0) {
            const foundTemperaments = await Temperaments.findAll({
                where: {
                    nombre: {
                        [Op.iLike]: temperamentos.map(temp => `%${temp}%`)
                    }
                }
            });

            // Asociar los temperamentos encontrados con la nueva raza de perro
            await newDog.setTemperaments(foundTemperaments);
        }

        return res.status(201).json(newDog);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = createDogCtrl;
