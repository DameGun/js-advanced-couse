const unique = (str) => {
    const charCodes = Array(256).fill(-1);

    for (let i = 0; i < str.length; i++) {
        if (charCodes[str.charCodeAt(i)] == -1) {
            charCodes[str.charCodeAt(i)] = i;
        }
        else {
            charCodes[str.charCodeAt(i)] = -2;
        }
    }

    const uniqueIndexes = new Set(charCodes);
    uniqueIndexes.delete(-1);
    uniqueIndexes.delete(-2);

    return uniqueIndexes.size > 0 ? str[uniqueIndexes.values().next().value] : 'Not found any unique symbols'
}

console.log(unique('aaaaaa'));