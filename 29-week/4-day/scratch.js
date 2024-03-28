const myObj = {
    a: 1,
    b: 2,
    c: 3,
};

const copyObj = { ...myObj, d: 4, c: 100, ...myObj };

console.log(copyObj);
