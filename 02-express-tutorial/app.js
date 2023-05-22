const http = require("http");

function customServer() {
  const server = http.createServer((req, res) => {
      const url = req.url;
      console.log(url);
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Home Page</h1>");
      res.end();
    }
    else if (url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>About</h1>");
      res.end();
    }
    else if (url === "/contact") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Contacts</h1>");
      res.end();
    }
    else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1> 404: Page not found!</h1>");
      res.end();
    }
  });

  server.listen(5000);
}

customServer();
