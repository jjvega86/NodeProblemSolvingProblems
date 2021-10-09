//* 1. Happy Numbers
/* https://en.wikipedia.org/wiki/Happy_number 

A happy number is a number defined by the following process: starting with any positive integer, 
replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. 

An example of a happy number is 19 
Write a method that determines if a number is happy or sad  */

// Write a function that takes in a POSTITIVE number
// Check to see if that number has multiple digits. If so, split those digits and sum the squares of each
// Repeat the process (call function recursively) until the number equals one. If it reaches one, return true. If it doesn't reach one, return false.

function happyNumbers(positiveInteger, checkedNumbers = []) {
  if (getNumberOfDigits(positiveInteger) === 1) {
    // if there's only one digit in the integer, return recursive call multiplying the integer by itself
    if (positiveInteger === 1) return true; // if there's only one digit, check if it is one. If so, return true for a happy number
    if (checkedNumbers.includes(positiveInteger)) return false; // have checked this number already? If so, it's unhappy.
    checkedNumbers.push(positiveInteger); // add current positiveInteger param to array of checkedNumbers
    return happyNumbers(positiveInteger * positiveInteger, checkedNumbers); // call recursively using square of positiveInteger
  } else if (getNumberOfDigits(positiveInteger) > 1) {
    // if more than one digits, convert integers into an array and sum their squares
    let splitIntegers = convertIntegerToArray(positiveInteger);
    let newInteger = 0;
    splitIntegers.forEach((number) => {
      newInteger += number * number;
    });
    checkedNumbers.push(newInteger); // push the newly found integer to the checkNumbers array
    return happyNumbers(newInteger, checkedNumbers);
  }
}

function getNumberOfDigits(number) {
  return parseInt(number.toString().length);
}

function convertIntegerToArray(integer) {
  let splitNumber = integer.toString().split("");
  let convertedSplitNumber = [];
  for (let i = 0; i < splitNumber.length; i++) {
    convertedSplitNumber.push(parseInt(splitNumber[i]));
  }
  return convertedSplitNumber;
}

module.exports = {
  happyNumbers,
};
