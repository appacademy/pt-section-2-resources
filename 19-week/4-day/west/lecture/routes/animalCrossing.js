const crossingRouter = require('express').Router();

crossingRouter.get('/bosses', (req, res) => {
    res.send('Mighty Nook');
});

module.exports = crossingRouter;
