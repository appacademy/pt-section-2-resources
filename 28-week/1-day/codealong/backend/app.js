const express = require("express");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
	return res.json({ hello: "world" });
});

app.post("/api/people", (req, res) => {
	console.log(req.body);
	return res.json(req.body);
});

app.listen(8000, () => console.log("Listening on port 8000..."));
