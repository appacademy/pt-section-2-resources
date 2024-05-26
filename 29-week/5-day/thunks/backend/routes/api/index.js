const router = require("express").Router();
const tweetRouter = require("./tweets.js");

router.use("/tweets", tweetRouter);

module.exports = router;
