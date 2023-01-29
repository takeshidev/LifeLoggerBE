const Sequelize = require("sequelize");

// This should be on a Secret Manager and not be hardcoded
const sequelize = new Sequelize("lifeLogger", "lifeloggeradmin", "321Admin.", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
