// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require("dotenv").config();
require("express-async-errors");

// Import the models used in these routes - DO NOT MODIFY
const { Cat, Toy, CatToy } = require("./db/models");

// Express using json - DO NOT MODIFY
app.use(express.json());

/*
STEP 1: Return the count, min price, max price, and sum of the price of all
the toys.
*/
app.get("/toys-summary", async (req, res, next) => {
    /*
        STEP 1A: Calculate the total number of all the toy records.
        Set it to a variable called `count`.
    */
    const count = await Toy.count();

    /*
        STEP 1B: Calculate the minimum price of all the toy records.
        Set it to a variable called `minPrice`.
    */
    const minPrice = await Toy.min("price");

    /*
        STEP 1C: Calculate the maximum price of all the toy records.
        Set it to a variable called `maxPrice`.
    */
    const maxPrice = await Toy.max("price");

    /*
        STEP 1D: Calculate the sum of the prices of all the toy records.
        Set it to a variable called `sumPrice`.
    */
    const sumPrice = await Toy.sum("price");

    res.json({
        count,
        minPrice,
        maxPrice,
        sumPrice,
    });
});

/*
STEP 2: Return the cat, its associated toys. Include the count, total price, and
average price of its associated toys.
*/
app.get("/cats/:catId", async (req, res, next) => {
    const { catId } = req.params;

    /* 
        STEP 2A: Find a cat with their associated toys
    */
    // // ! Lazy load
    // const cat = await Cat.findByPk(catId);

    // const toys = await cat.getToys();

    // ? Eager Load
    const cat = await Cat.findOne({
        where: {
            id: catId,
        },

        include: Toy,
    });

    const toys = cat.toJSON().Toys; //! Loses reference to Toy Model methods
    // const toys = cat.Toys; //! Keeps reference to Toy Model Methods

    /* 
        STEP 2B: Calculate the total amount of toys that the cat is
        associated with.
    */
    const toyCount = toys.length;

    /*
        STEP 2C: Calculate the total price of all the toys that the cat is
        associated with
    */
    const toyTotalPrice = toys.reduce((currentTotal, currentToy) => {
        currentTotal += currentToy.price;

        return currentTotal;
    }, 0);

    // const toyTotalPrice = toys.reduce((total, obj) => total + obj.price, 0);

    /*
        STEP 2D: Calculate the average price of all the toys that the cat is
        associated with
    */
    const toyAvgPrice = toyTotalPrice / toyCount;

    res.json({
        toyCount,
        toyTotalPrice,
        toyAvgPrice,
        // STEP 3: Observe the difference between `...cat` and `...cat.toJSON()`
        ...cat.toJSON(),
        // ...cat,
    });
});

/*
BONUS STEP 4: Return the toy and its associated cats. Include the percentage of
cats associated with the toy that have a color of "Orange".
*/
app.get("/toys/:toyId", async (req, res, next) => {
    /* 
    STEP 4A: Find a toy with their associated cats
    */
    // Your code here
    /* 
        STEP 4B: Find or calculate the total amount of cats that the toy is
        associated with.
    */
    // Your code here
    /*
        STEP 4C: Find or calculate the total amount of cats that have a color of
        "Orange" and that the toy is associated with.
    */
    // Your code here
    /*
        STEP 4D: Find or calculate the percentage of cats that have a color of
        "Orange" and that the toy is associated with.
    */
    // Your code here
    /*
        STEP 4E: Return the toy, its associated cats, the count of
        cats associated with the toy, the count of orange cats associated with
        the toy, and the percentage of orange cats that the toy is associated.
    */
    // Your code here
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
    res.json({
        message: "API server is running",
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log("Server is listening on port", port));
} else {
    module.exports = app;
}
