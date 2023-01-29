const port = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const app = express();

// Get routes
const diagnosticsRoutes = require("./routes/diagnostics.routes");
const feedRoutes = require("./routes/feed.routes");

app.use(bodyParser.json());

// Use routes
app.use("/", diagnosticsRoutes);
app.use("/feed", feedRoutes);

sequelize
  .sync()
  .then((result) => {
    console.log(`Life logger backend server running in port ${port}...`);
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
