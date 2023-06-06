const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

class GeneradorNumeros {
  constructor() {
    this.numeroActual = 0;
  }

  generarSiguienteNumero() {
    this.numeroActual += 1;
    return 'H' + this.numeroActual;
  }
}


module.exports = (sequelize) => {
  const generador = new GeneradorNumeros();
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => generador.generarSiguienteNumero(),
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    añosDeVida: {
      type: DataTypes.STRING,
      allowNull: false,

    },
  }, {
    timestamps: false
  });
};
