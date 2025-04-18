const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelize");

class Articles extends Model {}
Articles.init(
  {
    id_article: {
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
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Articles",
    tableName: "article",
    timestamps: false,
  }
);
module.exports = Articles;
