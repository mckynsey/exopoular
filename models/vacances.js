const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Vacances extends Model {}
Vacances.init(
  {
    id_vacance: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Vacances",
    tableName: "vacance",
    timestamps: false,
  }
);
module.exports = Vacances;










