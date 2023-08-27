const express = require("express");
const app = express();

const { readFile } = require("fs").promises;

app.get("/", async (req, res) => {
  res.send(await readFile("/pages/index.html", "utf8"));
});
