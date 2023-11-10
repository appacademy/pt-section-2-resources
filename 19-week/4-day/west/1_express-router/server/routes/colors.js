const colorRouter = require('express').Router();

colorRouter.get('/', (req, res) => {
    res.send('GET /colors');
});

colorRouter.get('/:name', (req, res) => {
    res.send('GET /colors/:name');
});

module.exports = colorRouter;
