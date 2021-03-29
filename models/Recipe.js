const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  recipe_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  prep_time: {
    type: Number,
    required: true,
  },
  cook_time: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('recipe', RecipeSchema);
