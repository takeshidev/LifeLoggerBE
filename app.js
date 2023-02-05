const port = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const initialize = require("./utils/initialize");
const app = express();
app.use(bodyParser.json());

// Get routes
const diagnosticsRoutes = require("./routes/diagnostics.routes");
const feedRoutes = require("./routes/feed.routes");
const userRoutes = require("./routes/user.routes");

// Use routes
app.use("/", diagnosticsRoutes);
app.use("/feed", feedRoutes);
app.use("/users", userRoutes);

sequelize
  .sync({ force: true })
  .then((result) => {
    return initialize();
  })
  .then((result) => {
    console.log(`Life logger backend server running in port ${port}...`);
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
