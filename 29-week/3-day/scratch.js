//! --------------------------------------------------------------------
//*                  Mutability/reference types review
//! --------------------------------------------------------------------

// const obj = {
//     a: 1,
//     b: 2,
// };

// const badCopy = obj;

// const goodCopy = { ...obj };

// console.log({ obj });
// console.log({ badCopy });
// console.log({ goodCopy });

// console.log(
//     '--------------------------------------------------------------------'
// );

// obj.c = 3;

// console.log({ obj });
// console.log({ badCopy });
// console.log({ goodCopy });

// Object.assign() // works, but why not just use the cool syntax ... ?

//! --------------------------------------------------------------------
//*                         Nested objects review
//! --------------------------------------------------------------------

let obj = {
    a: {
        num: 1,
    },
    b: {
        num: 2,
    },
};

const badCopy = { ...obj };
const goodCopy = { ...obj, a: { ...obj.a }, b: { ...obj.b } };

console.log({ obj });
console.log({ badCopy });
console.log({ goodCopy });

console.log(
    '--------------------------------------------------------------------'
);

obj.c = { num: 3 };

console.log({ obj });
console.log({ badCopy });
console.log({ goodCopy });

console.log(
    '--------------------------------------------------------------------'
);

// // obj = JSON.parse(JSON.stringify(obj)); // can work, but is costly and breaks Date() and other things

obj.a.num = 100;

console.log({ obj });
console.log({ badCopy });
console.log({ goodCopy });
