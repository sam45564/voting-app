const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("views/index.html", null, (error, html) => {
        if (error) {
            response.writeHead(404);
            response.write("File not found!");
        } else {
            response.write(html);
        }
        response.end();
    });
}).listen(3000);