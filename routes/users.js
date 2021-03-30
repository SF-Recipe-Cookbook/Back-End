const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userPhotoUpload,
} = require('../controllers/users');

const User = require('../models/User');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/:id/photo').put(protect, userPhotoUpload);

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
