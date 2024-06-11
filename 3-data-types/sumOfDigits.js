function sumOfFirstAndLastDigit(number) {
    if (typeof number !== 'number' && typeof number !== 'bigint') {
        throw new Error('Function input value should be type \'Number\' or \'BigInt\'')
    }

    // check for negative number included
    const stringRepresentation = number > 0 ? number.toString() : number.toString().slice(1);

    // + operator before string used to convert string to Number
    // also it can be done using Number construcor of parseInt function
    return +stringRepresentation[0] + +stringRepresentation[stringRepresentation.length - 1]
}

const test = sumOfFirstAndLastDigit(165151n);
console.log(test);