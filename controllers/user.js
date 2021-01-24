const { User } = require("../models");

exports.getUser = async function (req, res) {
  const user = await User.find();
  res.send(user);
};

exports.createUser = async function (req, res) {
  await User.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
