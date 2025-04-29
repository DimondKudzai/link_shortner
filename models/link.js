

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Link extends Model {}

Link.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    originalUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Link',
  }
);

module.exports = Link;

