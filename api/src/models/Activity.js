const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    duration:{
      type: DataTypes.STRING,
    },
/*     country:{
      type: DataTypes.STRING,
    }, */
    season: {
      type: DataTypes.STRING(25),
      validate: {
        isIn: [['Winter', 'Summer',  'Autumn', 'Spring']]
      }
    },
    countryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'country',
        key: 'id'
      }
    }
  });


}