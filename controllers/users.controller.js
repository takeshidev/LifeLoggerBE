const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
  User.findAll()
    .then((result) => {
      res.status(200).json(result);
      console.log(200);
    })
    .catch((err) => {
      console.error(err);
    });
  console.log("GET /users");
};

exports.postUser = (req, res) => {
  console.log(req.body);
  User.create({
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    name: req.body.name,
  })
    .then((result) => {
      res.status(201).json(result);
      console.log(201);
    })
    .catch((err) => {
      res.status(400).json(err.errors[0].message);
      console.error(err.errors[0].message);
    });
  console.log("POST /users/");
};
