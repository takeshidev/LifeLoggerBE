const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "lifeloggeradmin",
  database: "lifeLogger",
  password: "321Admin.",
});

module.exports = pool.promise();
