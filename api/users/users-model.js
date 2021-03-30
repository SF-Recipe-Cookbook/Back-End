const db = require('../../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  isValidRegister,
  isValidLogin,
};

function find() {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.id")
    .select("u.id", "u.username", "u.email", "r.name as role");
}

function findBy(filter) {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.id")
    .select("u.id", "u.username", "r.name as role", "u.password")
    .where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function findById(id) {
  return db("users as u")
    .join("roles as r", "u.role_id", "=", "r.id")
    .select("u.id", "u.username", "u.email")
    .where("u.id", id)
    .first();
}

function isValidRegister(user) {
  return Boolean(user.username && user.email && user.password && typeof user.password === "string");
}

function isValidLogin(user) {
  return Boolean(user.username && user.password && typeof user.password === "string");
}