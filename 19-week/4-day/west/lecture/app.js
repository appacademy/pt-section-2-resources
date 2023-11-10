// const express = require('express');

// const app = express();

const app = require('express')();
const eldenRouter = require('./routes/eldenRing');
// const crossingRouter = require('./routes/animalCrossing');

app.use('/eldenRing', eldenRouter);
// app.use('/animalCrossing', crossingRouter);

app.get('/', (req, res) => {
    res.send('Home route');
});

// app.get('/eldenRing', (req, res) => {
//     res.send('Greatest game ever');
// });

// app.get('/eldenRing/bosses', (req, res) => {
//     res.send('Radahn');
// });

const port = 5000;
app.listen(port, () => console.log('ye we be routin'));
