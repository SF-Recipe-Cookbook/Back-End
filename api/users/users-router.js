const router = require("express").Router();
const Users = require("./users-model.js")
const restricted = require("../auth/restricted-middleware.js");
const restrictRole = require('../auth/rolerestriced-middleware.js')

router.get("/", restricted, restrictRole('admin'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(posts => {
      res.json(posts);
    })
    .catch(err => res.send(err));
});

module.exports = router;