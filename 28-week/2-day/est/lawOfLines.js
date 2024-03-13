//! --------------------------------------------------------------------
//*                             Number
//! --------------------------------------------------------------------

// let num = 1;

// let newNum = num + 4;

// console.log(newNum);

let num = 1 + 4;

console.log(num);

//! --------------------------------------------------------------------
//*                             Array
//! --------------------------------------------------------------------

// const newArr = [];

// newArr.push('1');
// newArr.push('2');
// newArr.push('3');

// const dataArr = newArr.map((el) => {
//     const newEl = 'Data #' + el;

//     return newEl;
// });

// const firstData = dataArr[0];

// console.log(firstData);

const firstData = ['1', '2', '3'].map((el) => 'Data #' + el)[0];

console.log(firstData);

//! --------------------------------------------------------------------
//*                              Object
//! --------------------------------------------------------------------

// const gameObj = {};

// gameObj.title = 'Elden Ring';
// gameObj.rating = '10 / 10';

// const title = gameObj.title;
// const rating = gameObj.rating;

// console.log(title, rating);

const gameObj = { title: 'Elden Ring', rating: '10 / 10' };

const { title, rating } = gameObj;

console.log(title, rating);
