
// use Sequelize
require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    timezone: '+00:00',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database established successfully.');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });

module.exports = sequelize;