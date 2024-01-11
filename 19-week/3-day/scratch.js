const returnPlus5 = (num) => {
    add5(num);
    add5(num);
    add5(num);
    add5(num);
    add5(num);
    add5(num);
    add5(num);

    if (num + 5 === add5(num)) {
        console.log("Safe to continue!");
        return num + 5;
    } else {
        return "That's an error!";
    }
};

const add5 = (num) => {
    return num + 5;
};

console.log(returnPlus5(10));
