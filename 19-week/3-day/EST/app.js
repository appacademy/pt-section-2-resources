const express = require('express');

const app = express();

//! --------------------------------------------------------------------
//*                Express doesn't realize there's an error!
//! --------------------------------------------------------------------
// app.get('/hi', (req, res) => {
//     res.send('Hi there!');
// });

// // This is an error handler
// app.use((err, req, res, next) => {
//     res.send('Error: Never got to say hi :( ');
// });

//! --------------------------------------------------------------------
//*               Error being thrown and caught by express
//! --------------------------------------------------------------------

app.get('/hi', (req, res) => {
    res.send('Hi there!');
});

// This is throwing the error (notice no 'err' parameter)
app.use((req, res, next) => {
    throw new Error("We didn't find that resource");
});

// This is an error handler
app.use((err, req, res, next) => {
    console.log(err.message);
    res.send('Error: Never got to say hi :( ');
});

//! --------------------------------------------------------------------
//*          Start of the crazy example
//! --------------------------------------------------------------------

// app.get('/', (req, res) => {
//     res.send('Home route');
// });

// const checkName = (req, res, next) => {
//     let newName = req.params.name;

//     if (newName[0].toUpperCase() === newName[0]) {
//         next();
//     } else {
//         // res.send('Treat those animals with respect!');
//         next('Treat animals well pls!');
//     }
// };

// const badName = (err, req, res, next) => {
//     let newName = req.params.name;

//     if (newName[0].toUpperCase() === newName[0]) {
//         next();
//     } else {
//         res.send('Treat those animals with respect!');
//     }
// };

// app.get(['/cats/:name', '/cats/*'], checkName, (req, res) => {
//     let myString = 'Momo and ';

//     res.send(`${myString}${req.params.name}`);
// });

// app.get('/dogs/:name', checkName, (err, req, res, next) => {
//     let myString = 'Koga and ';

//     console.log('hyeooo');

//     res.send(`${myString}${req.params.name}`);
// });

// app.get('/admin/yo', (req, res, next) => {
//     next('Admin errror!!!');
// });

// app.get(
//     '/admin/*',
//     (req, res, next) => next('inner error'),
//     (err, req, res, next) => {
//         res.json({
//             error: 'Admin route',
//             message: err,
//         });
//     }
// );

// app.use((err, req, res, next) => {
//     console.log('AM I RUNNING!@!!!!!');
//     res.send('All other errors');
// });

app.listen(5000, () => console.log('Heyyooooo'));
