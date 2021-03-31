const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
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
    type: Array,
    required: true,
  },
  instructions: {
    type: Array,
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
  image_url: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('recipe', RecipeSchema);
