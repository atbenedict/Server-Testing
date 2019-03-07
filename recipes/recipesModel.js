const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(recipe) {
  const [id] = await db("recipes").insert(recipe, "id");

  return db("recipes")
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("recipes");
}

function findById(id) {
  return null;
}
