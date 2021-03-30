const db = require('../../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getUserPosts
};

function get() {
  return db("posts as p")
    .join("users as u", "u.id", "p.user_id")
    .join("category as c", "c.id", "p.category_id")
    .select("p.id", "c.name as category", "p.name", "p.image_url", "p.description", "u.email")
}

function getById(id) {
  return db("posts as p")
    .join("users as u", "u.id", "p.user_id")
    .join("category as c", "c.id", "p.category_id")
    .select("p.id", "c.name as category", "p.name", "p.image_url", "p.description", "u.email")
    .where("p.id", id)
}

function getUserPosts(id) {
  return db("posts as p")
    .join("users as u", "u.id", "p.user_id")
    .join("category as c", "c.id", "p.category_id")
    .select("p.id", "c.name as category", "p.name", "p.image_url", "p.description")
    .where("u.id", id)
}

function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("posts as p")
    .join("category as c", "c.id", "p.category_id")
    .select("p.id", "c.name as category", "p.name", "p.image_url", "p.description")
    .where("p.id", id)
    .update(changes);
}

function remove(id) {
  return db('posts')
    .where('id', id)
    .del();
}