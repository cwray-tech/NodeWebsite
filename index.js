const express = require("express");
const app = express();

const { readFile } = require("fs").promises;

app.get("/", async (req, res) => {
  res.send(await readFile("pages/index.html", "utf8"));
});

app.get("/about", async (req, res) => {
  res.send(await readFile("pages/about.html", "utf8"));
});

app.get("/contact-me", async (req, res) => {
  res.send(await readFile("pages/contact-me.html", "utf8"));
});

app.listen(3000, () => console.log("App available on http://localhost:3000"));
