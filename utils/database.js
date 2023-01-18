const mysql = require("mysql2");

// This should be on a Secret Manager and not be hardcoded
const pool = mysql.createPool({
  host: "localhost",
  user: "lifeloggeradmin",
  database: "lifeLogger",
  password: "321Admin.",
});

module.exports = pool.promise();
