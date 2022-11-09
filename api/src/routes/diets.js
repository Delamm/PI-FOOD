const express = require("express");
const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");

router.get("/", async (req, res) => {
  try {
    let allDiets = await Diet.findAll();
    console.log(allDiets);
    res.status(200).json(allDiets);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
