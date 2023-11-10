const express = require('express');
const eldenRing = require('./routes/eldenRing');
const dlc = require('./routes/dlc');
const app = express();

app.use('/dlc', dlc);
app.use('/goty', eldenRing);

app.get('/', (req, res) => {
    console.log('home');
    res.send('home');
});

// app.get('/eldenRing', (req, res) => {
//     res.send('Greatest of all time');
// });

const port = 5000;
app.listen(port, () => console.log('Yeah we routin'));
