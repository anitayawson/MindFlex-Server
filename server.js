require("dotenv").config();
const express = require("express");
const app = express();

const blogRoutes = require("./routes/blogs");

const cors = require("cors");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use("/api", blogRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
