const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Buses extends Model {}
Buses.init(
  {
    id_buse: {
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
    modelName: "Buses",
    tableName: "buse",
    timestamps: false,
  }
);
module.exports = Buses;






