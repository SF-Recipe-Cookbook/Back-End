const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Recipe = require('../models/Recipe');

// @route        GET /api/recipes
// @description  Get all recipes
// @access       Public
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route        GET /api/recipes/user
// @description  Get all users recipes
// @access       Private
router.get('/user', auth, async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route        POST /api/recipes
// @description  Add new recipe
// @access       Private
router.post(
  '/',
  [
    auth,
    // [
    //   check('name', 'Name is required').not().isEmpty(),
    //   check('description', 'Description is required').not().isEmpty(),
    //   check('ingredients', 'Ingredients are required').not().isEmpty(),
    //   check('instructions', 'Instructions are required').not().isEmpty(),
    //   check('prep_time', 'Prep time required').not().isEmpty(),
    //   check('cook_time', 'Cook time is required').not().isEmpty(),
    // ],
  ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const {
      name,
      description,
      category,
      ingredients,
      instructions,
      prep_time,
      cook_time,
      image_url,
    } = req.body;

    try {
      const newRecipe = new Recipe({
        name,
        description,
        category,
        ingredients,
        instructions,
        prep_time,
        cook_time,
        image_url,
        user: req.user.id,
      });

      const recipe = await newRecipe.save();

      res.json(recipe);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route        PUT /api/recipes/:id
// @description  Update recipe
// @access       Private
router.put('/:id', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const {
    name,
    description,
    category,
    ingredients,
    instructions,
    prep_time,
    cook_time,
    image_url,
  } = req.body;

  // Build recipe object
  const recipeFields = {};
  if (name) recipeFields.name = name;
  if (description) recipeFields.description = description;
  if (category) recipeFields.category = category;
  if (ingredients) recipeFields.ingredients = ingredients;
  if (instructions) recipeFields.instructions = instructions;
  if (prep_time) recipeFields.prep_time = prep_time;
  if (cook_time) recipeFields.cook_time = cook_time;
  if (image_url) recipeFields.image_url = image_url;

  try {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

    // Make sure user owns the recipe
    if (recipe.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { $set: recipeFields },
      { new: true }
    );

    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route        DELETE /api/recipes/:id
// @description  Delete recipe
// @access       Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

    // Make sure user owns the recipe
    if (recipe.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Recipe.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Recipe deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
