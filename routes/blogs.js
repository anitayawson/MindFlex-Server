const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));
const fs = require("fs");

router.get("/blogs", (req, res) => {
  knex
    .select("*")
    .from("blogs")
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Blogs not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving blogs" });
    });
});

router.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  knex
    .select("*")
    .from("blogs")
    .where({ id })
    .first()
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Blog post not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving blog post" });
    });
});

module.exports = router;
