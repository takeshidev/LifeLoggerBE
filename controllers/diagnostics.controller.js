const Entry = require("../models/entry");

exports.sanityTest = (req, res, next) => {
  res.status(200).json({
    status: "This is working!!!",
  });
  console.log("Sanity Test");
};
