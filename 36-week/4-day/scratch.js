let x = [5, 5, 5, 5, 5]
let y = x

function f(n) {
    return n.pop()
}


console.log(x === y)         // true
console.log(f(x) === f(x))   // true
console.log(f(y) === f(y))   // true
console.log(f(x) === f(y))   // false