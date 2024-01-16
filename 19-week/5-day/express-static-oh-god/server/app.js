const express = require("express");
const app = express();
const path = require("path");

const fs = require("fs");

app.use("/", express.static("./assets/css"));
app.use("/images/funny/little/guy", express.static("./assets/images"));

app.get("/home", (req, res) => {
    // const css = fs.readFileSync("./assets/css/application.css");
    const html = fs.readFileSync("./index.html", "utf-8");
    res.send(html);
});

app.get("/user-profile", (req, res) => {
    const html = fs.readFileSync("./pages/userProfile.html", "utf-8");

    res.send(html);
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));

// app.use(
//     "/",
//     (req, res, next) => {
//         console.log(req.url);
//         next();
//     },
//     express.static("./assets")
// );
// app.use("/resources", express.static("./assets/css"));
// app.use("/resources", express.static("./assets/images"));
// app.use("/resources", express.static("./assets/scripts"));
// app.use("/home", express.static("./index.html"));
// app.use("/space", express.static(path.join(__dirname, "./space")));
