// const express = require('express');
// const eldenRingRouter = express.Router();

const eldenRingRouter = require('express').Router();
const dlc = require('./dlc');

eldenRingRouter.use('/dlc', dlc);

eldenRingRouter.get('/', (req, res) => {
    res.send('Greatest of all time');
});

// eldenRingRouter.get('/dlc', (req, res) => {
//     res.send('Lets goooo');
// });

module.exports = eldenRingRouter;
