const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Notations extends Model {}
Notations.init(
  {
    id_notes: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    commentaire: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    note: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Notations",
    tableName: "notation",
    timestamps: false,
  }
);
module.exports = Notations;