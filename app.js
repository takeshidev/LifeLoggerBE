const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const feedRoutes = require("./routes/feed");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/feed", feedRoutes);

console.log("Life logger backend server running...");
app.listen(3000);
