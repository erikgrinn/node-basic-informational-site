// replacing http and fs modules
const express = require("express");
const path = require("node:path");

const app = express();

// Serve static files (CSS, images, JS, etc.)
app.use(express.static(__dirname));

// Example route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Add other routes as needed
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});

// replacing only http module
// const express = require("express");
// const fs = require("node:fs");
// const path = require("node:path");

// const app = express();

// // serve CSS
// app.get("/styles.css", (req, res) => {
//   const cssPath = path.join(__dirname, "styles.css");
//   fs.readFile(cssPath, "utf8", (err, content) => {
//     if (err) {
//       res.status(404).send("Not Found");
//     } else {
//       res.send(content);
//     }
//   });
// });

// // Serve HTML pages using fs
// app.get("/", (req, res) => {
//   const filePath = path.join(__dirname, "index.html");
//   fs.readFile(filePath, "utf8", (err, content) => {
//     if (err) {
//       res.status(404).send("404 Not Found");
//     } else {
//       res.send(content);
//     }
//   });
// });

// app.get("/about", (req, res) => {
//   const filePath = path.join(__dirname, "about.html");
//   fs.readFile(filePath, "utf8", (err, content) => {
//     if (err) {
//       res.status(404).send("404 Not Found");
//     } else {
//       res.send(content);
//     }
//   });
// });

// app.get("/contact", (req, res) => {
//   const filePath = path.join(__dirname, "contact.html");
//   fs.readFile(filePath, "utf8", (err, content) => {
//     if (err) {
//       res.status(404).send("404 Not Found");
//     } else {
//       res.send(content);
//     }
//   });
// });

// // 404 handler for all other routes
// app.use((req, res) => {
//   const filePath = path.join(__dirname, "404.html");
//   fs.readFile(filePath, "utf8", (err, content) => {
//     if (err) {
//       res.status(404).send("404 Not Found");
//     } else {
//       res.status(404).send(content);
//     }
//   });
// });

// app.listen(8080, () => {
//   console.log("Server running at http://localhost:8080/");
// });
