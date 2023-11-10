const colorRouter = require('express').Router();

colorRouter.get('/', (req, res) => {
    res.json('GET /colors');
});

colorRouter.get('/:name', (req, res) => {
    res.json('GET /colors/:name');
});

module.exports = colorRouter;
