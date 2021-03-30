const express = require('express');
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  recipePhotoUpload,
} = require('../controllers/recipes');

const Recipe = require('../models/Recipe');

// Include other resource routers
const reviewRouter = require('./reviews');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:recipeId/reviews', reviewRouter);

router.route('/:id/photo').put(protect, recipePhotoUpload);

router.route('/').get(getRecipes).post(protect, createRecipe);

router
  .route('/:id')
  .get(getRecipe)
  .put(protect, updateRecipe)
  .delete(protect, deleteRecipe);

module.exports = router;
