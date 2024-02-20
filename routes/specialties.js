const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

router.get("/specialties", (req, res) => {
  knex
    .select("*")
    .from("specialties")
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Specialties not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving specialties" });
    });
});

router.get("/specialties/:id", (req, res) => {
  const { id } = req.params;
  knex
    .select("*")
    .from("specialties")
    .where({ id })
    .first()
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Specialty not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving specialty" });
    });
});

module.exports = router;
