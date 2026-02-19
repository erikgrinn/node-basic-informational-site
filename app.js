// app.js
const path = require("node:path");
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

// this is serving the static index HTML file,
// making the explicit sendfile redundant...
// app.use(express.static(__dirname));
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

// views portion

// below placed in indexRouter
// app.get("/", (req, res) => {
//   res.render("index", { message: "EJS rocks!" });
// });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
