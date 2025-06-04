// http

const http = require("http");

const server = http.createServer()

server.on("request", (req, res) => {
    const path = req.url;

    if (path == "/") {
        return res.end("Welcome to home page")
    }

    return res.end("Page Not Found!")
})

server.listen(8080, () => {
    console.log("Server is running on port 8080\nhttp://localhost:8080")
})