const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

router.post("/reflections", (req, res) => {
  const { title, content, userId } = req.body;
  if (!title || !content || !userId) {
    return res.status(400).json({ message: "All fields are required" });
  }
  knex
    .insert({
      title,
      content,
      user_id: userId,
    })
    .into("reflections")
    .returning("*")
    .then((data) => {
      if (data) {
        res.status(201).json(data);
      } else {
        res.status(400).json({ message: "Reflection not created" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error creating reflection" });
    });
});

router.get("/reflections", (req, res) => {
  knex
    .select("*")
    .from("reflections")
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Reflections not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving reflections" });
    });
});

router.get("/reflections/user/:userId", (req, res) => {
  const { userId } = req.params;
  knex
    .select("*")
    .from("reflections")
    .where({ user_id: userId })
    .then((data) => {
      if (data && data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "No reflections found for this user" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving reflections" });
    });
});

router.delete("/reflections/:id", (req, res) => {
  const { id } = req.params;
  knex("reflections")
    .where({ id })
    .del()
    .then((count) => {
      if (count === 0) {
        res.status(404).json({ message: "Reflection not found" });
      } else {
        res.status(204).send();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error deleting reflection" });
    });
});

module.exports = router;
