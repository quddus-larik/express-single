const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express deployed on Netlify! HAHA also fro Github" });
});

module.exports.handler = serverless(app);
