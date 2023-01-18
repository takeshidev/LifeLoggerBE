const Entry = require("../models/entry");

exports.getPosts = async (req, res, next) => {
  let entry = await Entry.fetchAll();
  res.status(200).json(entry[0]);
  console.log("GET /feed");
};

exports.getPostById = async (req, res, next) => {
  const id = req.params.id;
  let entry = await Entry.getById(id);
  res.status(200).json(entry[0][0]);
  console.log("GET /feed/" + id);
};
