const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Concours extends Model {}
Concours.init(
  {
    id_concour: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    dateDebut: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateFin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Concours",
    tableName: "article",
    timestamps: false,
  }
);
module.exports = Concours;




