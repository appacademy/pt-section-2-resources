const dlcRouter = require('express').Router();

dlcRouter.get('/', (req, res) => {
    res.send('Shadows of the something');
});

dlcRouter.get('/price', (req, res) => {
    res.send('$40');
});

module.exports = dlcRouter;
