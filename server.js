require("dotenv").config();
const express = require("express");
const app = express();

const blogRoutes = require("./routes/blogs");
const therapistRoutes = require("./routes/therapists");
const reflectionRoutes = require("./routes/reflections");
const specialtiesRoutes = require("./routes/specialties");

const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", blogRoutes);
app.use("/api", therapistRoutes);
app.use("/api", reflectionRoutes);
app.use("/api", specialtiesRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
