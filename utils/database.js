const { Sequelize } = require("sequelize"); // The destructuring assignment syntax allows you to extract properties from an object and assign them to variables with the same name

// This should be on a Secret Manager and not be hardcoded
const sequelize = new Sequelize("lifeLogger", "lifeloggeradmin", "321Admin.", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
