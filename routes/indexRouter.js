const path = require("path");
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

indexRouter.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "about.html"));
});

indexRouter.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "contact.html"));
});

// indexRouter.post("/contact", (req, res) => {
// });

module.exports = indexRouter;
