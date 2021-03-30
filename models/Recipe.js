const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
  {
    recipe_name: {
      type: String,
      required: [true, 'Recipe name required'],
      unique: true,
      trim: true,
      maxlength: [50, 'Recipe name can not be more than 50 characters'],
    },
    recipe_source: {
      type: String,
      required: [true, 'Recipe source required'],
      trim: true,
      maxlength: [50, 'Recipe source can not be more than 50 characters'],
    },
    category: {
      // Array of strings
      type: [String],
      required: true,
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Drinks', 'Dessert'],
    },
    description: {
      type: String,
      required: [true, 'Description required'],
      trim: true,
      maxlength: [500, 'Description can not be more than 500 characters'],
    },
    ingredients: {
      type: String,
      required: [true, 'Ingredients required'],
      trim: true,
      maxlength: [500, 'Ingredients can not be more than 500 characters'],
    },
    instructions: {
      type: String,
      required: [true, 'Instructions required'],
      trim: true,
      maxlength: [500, 'Instructions can not be more than 500 characters'],
    },
    prep_time: {
      type: Number,
      required: [true, 'Prep time required'],
    },
    cook_time: {
      type: Number,
      required: [true, 'Cook time required'],
    },
    averageRating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [10, 'Rating can not be more than 10'],
    },
    photo: {
      type: String,
      default: 'no-photo.jpg',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model('Recipe', RecipeSchema);
