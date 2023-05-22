console.log("Express tutorial.....");


const http = require("http");

function customServer() {
    const server = http.createServer((req, res) => {
        console.log("LOL... Backend is not easy, but i must do it...");
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Home Page</h1>");
        res.end();
    })

    server.listen(5000);
}

customServer()