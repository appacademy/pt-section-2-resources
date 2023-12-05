const http = require("http");
const server = http.createServer((req, res) => {
    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => {
        if (reqBody) {
            req.body = JSON.parse(reqBody);
        }

        // GET /users/:userId
        if (req.method === "GET" && req.url.startsWith("/users/")) {
            const urlParts = req.url.split("/");
            if (urlParts.length === 3) {
                const userId = urlParts[2];
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/plain");
                res.write("User details for userId: ");
                res.write(userId);
                return res.end();
            }
        }

        // Everything else is not found
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.write("Not Found");
        return res.end();
    });
});

const port = 5000;
server.listen(port, () => console.log("Server is listening on port", port));
