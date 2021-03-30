const express = require('express');
const Recipes = require('./recipes-model');
const router = express.Router();
const restricted = require('../auth/restricted-middleware.js');

router.get('/', (req, res, next) => {
  Recipes.get(req.query)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
});

router.get('/:id', (req, res) => {
  Recipes.getById(req.params.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
});

router.get('/user/:id', restricted, (req, res) => {
  Recipes.getUserRecipes(req.params.id)
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => res.send(err));
});

router.post('/', restricted, (req, res, next) => {
  Recipes.insert(req.body)
    .then((newRecipe) => {
      res.status(200).json(newRecipe);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
});

router.delete('/:id', restricted, (req, res, next) => {
  Recipes.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'the recipe has been deleted' });
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
});

router.put('/:id', restricted, (req, res, next) => {
  Recipes.update(req.params.id, req.body)
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
});

module.exports = router;
