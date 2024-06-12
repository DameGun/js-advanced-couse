function checkNums(firstNum, secondNum) {
    if (typeof firstNum !== 'number' && typeof secondNum !== 'number') {
        throw new Error('Input values must be type of \'Number\'');
    }

    if (secondNum === 0) {
        throw new Error('Second value is 0');
    }

    return secondNum;
}

console.log(checkNums(15, 5));

try { 
    checkNums(5, 0)
}
catch (err) {
    console.log(err.message);
}