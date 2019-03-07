exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      return knex("recipes").insert([
        { name: "tacos" },
        { name: "salad" },
        { name: "hamburgers" },
        { name: "boullibaise" }
      ]);
    });
};
