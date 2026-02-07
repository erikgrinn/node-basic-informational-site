const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  // for CSS
  if (req.url === "/styles.css") {
    const cssPath = path.join(__dirname, "styles.css");
    fs.readFile(cssPath, (err, content) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(content);
      }
    });
    return;
  }

  // for HTML
  let filePath = "index.html";

  if (req.url === "/") {
    filePath = "index.html";
  } else if (req.url === "/about") {
    filePath = "about.html";
  } else if (req.url === "/contact") {
    filePath = "contact.html";
  } else {
    filePath = "404.html";
  }

  const fullPath = path.join(__dirname, filePath);

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      // if there is no 404.html file
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});

// note that css is not being served
