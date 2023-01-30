const Entry = require("../models/entry");

exports.getPosts = async (req, res, next) => {
  Entry.findAll()
    .then((result) => {
      res.status(200).json(result);
      console.log(200);
    })
    .catch((err) => {
      console.error(err);
    });
  console.log("GET /feed");
};

exports.getPostById = async (req, res, next) => {
  const id = req.params.id;

  Entry.findByPk(id)
    .then((result) => {
      res.status(200).json(result);
      console.log(200);
    })
    .catch((err) => {
      console.error(err);
    });
  console.log("GET /feed/" + id);
};

exports.postPost = (req, res) => {
  Entry.create({
    content: req.body.content,
    mood: req.body.mood,
    user: req.body.user,
  })
    .then((result) => {
      res.status(201).json(result);
      console.log(201);
    })
    .catch((err) => {
      res.status(400).json({ error: err.parent["sqlMessage"] });
      console.error({ error: err.parent["sqlMessage"] });
    });
  console.log("POST /feed/");
};
