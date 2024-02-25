const fs = require("fs");
const crypto = require("crypto");

// Generate a random secret key
const generateRandomToken = () => {
  return crypto.randomBytes(64).toString("hex");
};

// Read existing .env content
const readEnvFile = () => {
  try {
    return fs.readFileSync(".env", "utf8");
  } catch (error) {
    return "";
  }
};

const generateEnvFile = (existingContent, jwtSecret) => {
  const envContent = `${existingContent.trim()}\nJWT_SECRET=${jwtSecret}\n`;

  fs.writeFileSync(".env", envContent, { flag: "w" });

  console.log(".env file has been updated with JWT secret key.");
};

const jwtSecret = generateRandomToken();
const existingContent = readEnvFile();
generateEnvFile(existingContent, jwtSecret);

console.log("JWT Secret Key:", jwtSecret);
