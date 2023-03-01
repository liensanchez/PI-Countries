const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    officialName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
    },
    extension:{
      type: DataTypes.FLOAT
    },
    population: {
      type: DataTypes.FLOAT
    }

  });

/*     // define association between Activity and Country
    Activity.associate = function(models) {
      Activity.belongsTo(models.Country, {
        foreignKey: 'countryId',
        onDelete: 'CASCADE'
      });
    }; */
};
