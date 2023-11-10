const express = require('express');
const crossingRouter = require('./animalCrossing');

const eldenRouter = express.Router();

// localhost:5000/eldenRing

eldenRouter.get('/', (req, res) => {
    res.send('Greatest game ever');
});

eldenRouter.get('/bosses', (req, res) => {
    res.send('Radahn');
});

eldenRouter.use('/', crossingRouter);

module.exports = eldenRouter;
