const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Maisons extends Model {}
Maisons.init(
  {
    id_maison: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Maisons",
    tableName: "maison",
    timestamps: false,
  }
);
module.exports = Maisons;










