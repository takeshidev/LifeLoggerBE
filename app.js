const port = 3000;
const express = require("express");
const app = express();

// Get routes
const diagnosticsRoutes = require("./routes/diagnostics.routes");
const feedRoutes = require("./routes/feed.routes");

// Use routes
app.use("/", diagnosticsRoutes);
app.use("/feed", feedRoutes);

console.log(`Life logger backend server running in port ${port}...`);
app.listen(port);
