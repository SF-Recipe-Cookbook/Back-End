const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const { jwtSecret } = require('../config/secret');

const Users = require('../models/User');
const { isValid } = require('../service/user-service');

// @route        POST /api/users
// @description  Register a user
// @access       Public
router.post('/register', (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the database
    Users.add(credentials)
      .then((user) => {
        res.status(201).json({ user });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        'please provide username and password and the password shoud be alphanumeric',
    });
  }
});

// @route        GET /api/auth
// @description  Get logged in user
// @access       Private
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        // compare the password the hash stored in the database
        if (user && bcryptjs.compareSync(password, user.password)) {
          // issue token
          const token = buildToken(user);
          res
            .status(200)
            .json({ message: `Welcome back! ${user.username}`, token });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        'please provide username, email and password, the password shoud be alphanumeric',
    });
  }
});

function buildToken(user) {
  const payload = {
    // claims
    id: user.id,
    username: user.username,
    email: user.email,
  };
  const config = {
    expiresIn: 3600,
  };
  return jwt.sign(payload, jwtSecret, config);
}

module.exports = router;
