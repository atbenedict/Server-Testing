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

module.exports = server;
