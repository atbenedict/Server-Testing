const db = require("../data/dbConfig.js");
const Recipes = require("./recipesModel");

describe("recipes model", () => {
  describe("insert()", () => {
    afterEach(async () => {
      await db("recipes").truncate();
    });

    it("should insert the provided recipes into the db", async () => {
      await Recipes.insert({ name: "tacos" });
      await Recipes.insert({ name: "salad" });

      const recipes = await db("recipes");
      expect(recipes).toHaveLength(2);
    });

    it("should insert the provided recipes into the db", async () => {
      let recipe = await Recipes.insert({ name: "tacos" });
      expect(recipe.name).toBe("tacos");

      recipe = await Recipes.insert({ name: "salad" });
      expect(recipe.name).toBe("salad");
    });
  });
});
