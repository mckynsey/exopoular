const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Bdcs extends Model {}
Bdcs.init(
  {
    id_bdc: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    pdf: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Bdcs",
    tableName: "bdc",
    timestamps: false,
  }
);
module.exports = Bdcs;


