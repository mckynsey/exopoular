const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Rentrees extends Model {}
Rentrees.init(
  {
    id_rentree: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    date_rentree: {
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
    modelName: "Rentrees",
    tableName: "rentree",
    timestamps: false,
  }
);
module.exports = Rentrees;










