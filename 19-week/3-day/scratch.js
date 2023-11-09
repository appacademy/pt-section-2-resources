const add5 = (object, str = '') => {
    const newNum = object + 5;

    return `${str} ${newNum}`;
};

console.log(add5(10));

// const myRest = (...things) => console.log(things);

// myRest(1, 2);
// myRest(1, 2, 3, 4, 5, 6, 6);
