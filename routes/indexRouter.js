const path = require("node:path");
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

// this is not run because of above, and no next() use in route handler
// indexRouter.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "index.html"));
// });

indexRouter.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "about.html"));
});

indexRouter.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "contact.html"));
});

// indexRouter.post("/contact", (req, res) => {
// });

module.exports = indexRouter;
