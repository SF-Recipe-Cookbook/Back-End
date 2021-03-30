const router = require('express').Router();
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');
const restrictRole = require('../auth/rolerestricted-middleware');

router.get('/', restricted, restrictRole('admin'), (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
  Users.findById(req.params.id)
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
