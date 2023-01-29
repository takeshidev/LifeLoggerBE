const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Entry = sequelize.define("Entry", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  mood: {
    type: Sequelize.INTEGER,
  },
  user: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Entry;
