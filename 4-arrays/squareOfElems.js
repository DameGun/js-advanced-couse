function squareOfArrayElements(arr) {
    if (!(arr instanceof Array)) {
        throw new Error('Input value of function should be \'Array\'');
    }

    return arr.reduce((accum, value) => accum + (Number(value)**2 || 0), 0);
}

const inputArr = [1, 2n, 'asdasd', 2];
const result = squareOfArrayElements(inputArr);
console.log(result);