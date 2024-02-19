const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

router.get("/therapists", (req, res) => {
  knex
    .select("*")
    .from("therapists")
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Therapists not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving therapists" });
    });
});

router.get("/therapists/:id", (req, res) => {
  const { id } = req.params;
  knex
    .select("*")
    .from("therapists")
    .where({ id })
    .first()
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Therapist info not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving therapist info" });
    });
});

module.exports = router;
