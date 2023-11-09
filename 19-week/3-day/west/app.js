const express = require('express');

const app = express();

const existingPets = ['momo', 'tenten', 'kiki', 'hime', 'koga'];

// const checkForPets = (req, res, next) => {
//     console.log('\n CHECK FOR PETS IS RUNNING! \n');

//     if (existingPets.includes(req.params.name.toLowerCase())) {
//         // Success
//         next();
//     } else {
//         // Error
//         next("That pet doesn't exist :(");
//     }
// };

// const errorForPets = (err, req, res, next) => {
//     if (existingPets.includes(req.params.name.toLowerCase())) {
//         next();
//     } else {
//         res.send("We doesn't know that pet");
//     }
// };

// app.get(
//     // When we receive a request at this route,
//     '/cats/:name',
//     // checkForPets runs first! Then...
//     checkForPets,
//     // This unnamed function runs. Then...
//     (req, res, next) => {
//         console.log('First function after checkForPets');
//         next();
//     },
//     // This function runs too! Then....
//     (req, res, next) => {
//         console.log('Second function after checkForPets');
//         next();
//     },
//     // Finally send back the response!
//     (req, res) => {
//         res.send(`We have cats named ${req.params.name}, FINALLY!`);
//     }
// );

// const otherFunction = (req, res) => {
//     console.log('I AM INEVITABLE');
// };

// app.get('/dogs/:name', otherFunction, checkForPets, (req, res) => {
//     res.send(`We have dogs named ${req.params.name}`);
// });

// app.use((err, req, res, next) => {
//     res.send(`This was the error: ${err}`);
// });

app.get('/hi', (req, res) => {
    res.send('Hi there!');
});

// This is an error handler
app.use((err, req, res, next) => {
    res.send('Error: Never got to say hi :( ');
});

app.listen(5000, () => console.log('Middleware is sooo scaawwyyyy'));
