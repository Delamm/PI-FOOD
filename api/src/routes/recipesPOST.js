const express = require("express");
const { Router } = require("express");
const router = Router();
const { Recipe, Diet } = require("../db");

router.post("/", async (req, res) => {
  let { name, summary, healthScore, steps, diets } = req.body;
  if (name && summary && healthScore && steps && diets) {
    try {
      let newRecipe = await Recipe.create({
        id,
        name,
        summary,
        healthScore,
        steps,
        diets,
      });

      let findDiet = await Diet.findall({
        where: { name: diets },
      });

      newRecipe.addDiet(findDiet);
      res.status(200).send("Receta creada con exito");
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(400).send("Faltan enviar datos");
  }
});

module.exports = router;
