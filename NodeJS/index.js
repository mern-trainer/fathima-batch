// http

const http = require("http");
const { readFileSync } = require("fs");

const server = http.createServer()

// 200 -> sucess
// 201 -> created
// 400 -> bad request
// 404 -> not found
// 401 -> unauthorized
// 409 -> conflict
// 500 -> internal server error

server.on("request", (req, res) => {
    const path = req.url;

    if (path == "/") {
        const indexFile = readFileSync("./index.html", { encoding: "utf-8" });
        res.writeHead(200, {
            "content-type": "text/html"
        })
        return res.end(indexFile)
    }

    if (path == "/about") {
        const aboutFile = readFileSync("./about.html", { encoding: "utf-8" });
        res.writeHead(200, {
            "content-type": "text/html"
        })
        return res.end(aboutFile)
    }

    if(path == "/contact") {
        const contactFile = readFileSync("./contact.html", { encoding: "utf-8" });
        res.writeHead(200, {
            "content-type": "text/html"
        })
        return res.end(contactFile)
    }

    return res.end("Page Not Found!")
})

server.listen(8080, () => {
    console.log("Server is running on port 8080\nhttp://localhost:8080")
})