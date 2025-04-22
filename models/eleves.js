const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Eleves extends Model {}
Eleves.init(
  {
    id_eleve: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    date_de_naissance: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    parent: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Eleves",
    tableName: "eleve",
    timestamps: false,
  }
);
module.exports = Eleves;








