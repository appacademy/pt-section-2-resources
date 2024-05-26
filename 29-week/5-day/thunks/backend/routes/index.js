const express = require("express");
const router = express.Router();
const apiRouter = require("./api");

if (process.env.NODE_ENV !== "production") {
	router.get("/api/csrf/restore", (req, res) => {
		res.cookie("XSRF-TOKEN", req.csrfToken());
		return res.json({});
	});
}

router.use("/api", apiRouter);

module.exports = router;
