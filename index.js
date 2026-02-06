const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  let filePath = "index.html";

  if (req.url === "/") {
    filePath = "index.html";
  } else if (req.url === "/about") {
    filePath = "about.html";
  } else if (req.url === "/contact-me") {
    filePath = "contact-me.html";
  } else {
    filePath = "404.html";
  }

  const fullPath = path.join(__dirname, filePath);

  fs.readFile(fullPath, (err, content) => {
    if (err) {
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
