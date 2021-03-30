const db = require('../data/db-config');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getUserRecipes,
};

function get() {
  return db('recipes as r')
    .join('users as u', 'u.id', 'r.user_id')
    .join('category as c', 'c.id', 'r.category_id')
    .select(
      'r.id',
      'c.name as category',
      'r.name',
      'r.image_url',
      'r.description',
      'u.email'
    );
}

function getById(id) {
  return db('recipes as r')
    .join('users as u', 'u.id', 'r.user_id')
    .join('category as c', 'c.id', 'r.category_id')
    .select(
      'r.id',
      'c.name as category',
      'r.name',
      'r.image_url',
      'r.description',
      'u.email'
    )
    .where('r.id', id)
    .first();
}

function getUserRecipes(id) {
  return db('recipes as r')
    .join('users as u', 'u.id', 'r.user_id')
    .join('category as c', 'c.id', 'r.category_id')
    .select(
      'r.id',
      'c.name as category',
      'r.name',
      'r.image_url',
      'r.description'
    )
    .where('u.id', id);
}

function insert(recipe) {
  return db('recipes')
    .insert(recipe)
    .then((ids) => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('recipes as r')
    .join('category as c', 'c.id', 'r.category_id')
    .select(
      'r.id',
      'c.name as category',
      'r.name',
      'r.image_url',
      'r.description'
    )
    .where('r.id', id)
    .update(changes);
}

function remove(id) {
  return db('recipes').where('id', id).del();
}
