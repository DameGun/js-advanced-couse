"use strict";

// Variant 3

function getNumberOfVowelLetters(input) {
  const regex = /[aeiou]|[ауоиэыяюеё]/gim;
  const found = input.match(regex);

  return found.length;
}

// We must explicitly declare this variable, because strict mode enabled
// without strict mode it will be available to write like this
// numOfVowels = getNumberOfVowelLetters(...)

const numOfVowels = getNumberOfVowelLetters(
  "This IS text of getNumberOfVowelLetters function, также поддерживает русский язык"
);
console.log(numOfVowels);
