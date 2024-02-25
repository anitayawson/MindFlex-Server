const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  knex
    .select("*")
    .from("users")
    .where({ id })
    .first()
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving user" });
    });
});

module.exports = router;
