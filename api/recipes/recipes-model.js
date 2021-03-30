const db = require('../../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getUserRecipes,
};

function get() {
  return db('recipes as p')
    .join('users as u', 'u.id', 'p.user_id')
    .join('category as c', 'c.id', 'p.category_id')
    .select(
      'p.id',
      'c.name as category',
      'p.name',
      'p.image_url',
      'p.description'
    );
}

function getById(id) {
  return db('recipes as p')
    .join('users as u', 'u.id', 'p.user_id')
    .join('category as c', 'c.id', 'p.category_id')
    .select(
      'p.id',
      'c.name as category',
      'p.name',
      'p.image_url',
      'p.description',
      'u.username'
    )
    .where('p.id', id)
    .first();
}

function getUserRecipes(id) {
  return db('recipes as p')
    .join('users as u', 'u.id', 'p.user_id')
    .join('category as c', 'c.id', 'p.category_id')
    .select(
      'p.id',
      'c.name as category',
      'p.name',
      'p.image_url',
      'p.description',
      'p.ingredients',
      'p.instructions',
      'p.prep_time',
      'p.cook_time'
    )
    .where('u.id', id);
}

function insert(recipe) {
  return db('recipes')
    .insert(recipe)
    .then((id) => {
      return getById(id[0]);
    });
}

function update(id, changes) {
  return db('recipes as p')
    .join('category as c', 'c.id', 'p.category_id')
    .select(
      'p.id',
      'c.name as category',
      'p.name',
      'p.image_url',
      'p.description'
    )
    .where('p.id', id)
    .update(changes);
}

function remove(id) {
  return db('recipes').where('id', id).del();
}
