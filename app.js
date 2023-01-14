const port = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./utils/database");
const app = express();

const feedRoutes = require("./routes/feed");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/feed", feedRoutes);

console.log(`Life logger backend server running in port ${port}...`);
app.listen(port);
