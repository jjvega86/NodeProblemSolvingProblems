const prompt = require("prompt-sync")();

//! Problem Solving Problems Part 1

//* 1. Reverse a string

function reverseString(stringToReverse) {
  let splitString = stringToReverse.split(""); // We use an empty string with NO space to split by character into a new array
  let finalString = "";
  splitString.reverse().forEach((element) => {
    //reverse the array and enumerate through each element. Can also do a for loop iterating backwards
    finalString += element;
  });
  return finalString;
}

function basicReverseAString(stringToReverse) {
  let finalString = "";
  for (let i = stringToReverse.length - 1; i >= 0; i--) {
    finalString += stringToReverse[i];
  }

  return finalString;
}

//* 2. Capitalize letter
/* Write code that takes a string as input and capitalize the first letter of each word. 
Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”  */

function capitalizeFirstLetter(stringToCapitalize) {
  let finalString = "";
  let splitStringArray = stringToCapitalize.split(" "); // split input string into words by space between words
  splitStringArray.forEach((word) => {
    // enumerate through each word in the newly split array
    let finalWord = "";
    let finalWordArray = word.split("");
    for (let i = 0; i < finalWordArray.length; i++) {
      // iterate through each individual word, split into another array. Capitalize only the char at index 0
      if (i === 0) {
        finalWord += finalWordArray[i].toUpperCase();
      } else {
        finalWord += finalWordArray[i];
      }
    }
    finalString += finalWord + " "; //concat word with a space in between each word
  });
  return finalString;
}

function basicCapitalizeFirstLetter(stringToCapitalize) {
  let finalString = "";
  for (let i = 0; i < stringToCapitalize.length; i++) {
    if (stringToCapitalize[i - 1] === " " || i === 0) {
      finalString += stringToCapitalize[i].toUpperCase();
    } else {
      finalString += stringToCapitalize[i];
    }
  }
  return finalString;
}

//* 3. Compress a string of characters
/* For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"  */

function compressAString(stringToCompress) {
  let counter = 0;
  let finalString = "";
  for (let i = 0; i < stringToCompress.length; i++) {
    if (stringToCompress.charAt(i) !== stringToCompress.charAt(i + 1)) {
      counter++;
      finalString += counter + stringToCompress.charAt(i);
      counter = 0;
    } else {
      counter++;
    }
  }

  return finalString;
}

//* 4. Palindrome (bonus)

function checkForPalindrome() {
  let userInput = prompt("Please enter the string you would like to check!");
  let reversedStringToCheck = reverseString(userInput); // call reverseString function from earlier
  if (reversedStringToCheck === userInput) {
    // check if reversed string and original string are the same
    return true;
  } else {
    return false;
  }
}

module.exports = {
  reverse: basicReverseAString,
  capitalizeBasic: basicCapitalizeFirstLetter,
  capitalizeAdvanced: capitalizeFirstLetter,
  palindrome: checkForPalindrome,
  compress: compressAString,
};
