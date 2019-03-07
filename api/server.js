const express = require("express");

const recipes = require("../recipes/recipesModel.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/recipes", async (req, res) => {
  const rows = await recipes.getAll();

  res.status(200).json(rows);
});

server.post("/recipes", async (req, res) => {
  const recipe = await recipes.insert(req.body);

  res.status(200).json(recipe);
});

server.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    recipes.remove(id).then(res => {
      res.status(200).json({ message: "recipe successfully deleted" });
    });
  } catch (err) {
    res.status(500).json({ errorMessage: "error deleting recipe" });
  }
});

module.exports = server;
