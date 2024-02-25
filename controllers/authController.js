const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const knex = require("knex");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "your_generated_secret_key";

// Initialize Knex connection
const db = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
});

// Controller function for user sign-up
exports.signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters" });
    }

    const existingUser = await db("users").where({ email }).first();
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user details in the database
    await db("users").insert({ name, email, password: hashedPassword });
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "24h" });

    res.status(201).json({ message: "Sign up successful!", token });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function for user log in
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Retrieve user details from the database
    const user = await db("users").where("email", email).first();
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json({ message: "Log in successful", token, id: user.id });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
