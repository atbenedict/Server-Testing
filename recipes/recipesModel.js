const db = require("../data/dbConfig.js");

module.exports = {
  insert,

  remove,
  getAll
};

async function insert(recipe) {
  const [id] = await db("recipes").insert(recipe, "id");

  return db("recipes")
    .where({ id })
    .first();
}

async function remove(id) {
  return db("recipes")
    .where({ id })
    .delete();
}

function getAll() {
  return db("recipes");
}
