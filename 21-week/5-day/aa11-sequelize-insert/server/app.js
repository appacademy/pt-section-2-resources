// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });

    res.json(allPuppies);
});


// STEP 1
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to BUILD a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/build', async (req, res, next) => {
    // Your code here
    // console.log(req.body)
    // res.send("hi")
    let {name, ageYrs, weightLbs, breed, microchipped} = req.body
    if(!name){
        res.json({message: "you a need a name"})
    }
    if(!ageYrs){
        res.json({message: "you a need a age"})
    }
    if(!breed){
        res.json({message: "you a need a breed"})
    }
    if(!microchipped){
        res.json({message: "you a need a microchipped"})
    }
    if(!weightLbs){
        res.json({message: "you a need a weightLbs"})
    }
    // console.log("name", name)
    // console.log("name", ageYrs)

    // let newPuppy = Puppy.build({ name, ageYrs, weightLbs, breed, microchipped})
    let newPuppy = Puppy.build(req.body)
    console.log("new puppy", newPuppy)
    try{
        await newPuppy.validate()
        newPuppy.save()
    }
        catch(e){
            res.json({error: "something went wrong!"})
        }

    res.send("Your puppy was created!")

})

// STEP 2
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to CREATE a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/create', async (req, res, next) => {
    // Your code here

    let {name, ageYrs, weightLbs, breed, microchipped} = req.body
    if(!name){
        res.json({message: "you a need a name"})
    }
    if(!ageYrs){
        res.json({message: "you a need a age"})
    }
    if(!breed){
        res.json({message: "you a need a breed"})
    }
    if(!microchipped){
        res.json({message: "you a need a microchipped"})
    }
    if(!weightLbs){
        res.json({message: "you a need a weightLbs"})
    }

let newPuppy
try{
    newPuppy = await Puppy.create(req.body)

} catch(e){
    res.json({message:"Something wrong!"})
}
    res.json({newPup: newPuppy})
})


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
