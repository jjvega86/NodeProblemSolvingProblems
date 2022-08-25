/**

Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).
Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format
Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.

Output Format
For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).

Sample Input
S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame

Sample Output
plastic cup
mobilePhone
CoffeeMachine
large software book
whiteSheetOfPaper()
picture frame
 */

function processData(input) {
  let [opType, resultType, inputString] = input.split(";");
  let finalString = "";

  if (opType === "S") {
    finalString = splitInput(resultType, inputString);
  } else if (opType === "C") {
    finalString = combineInput(resultType, inputString);
  }

  return finalString;
}

function splitInput(type, input) {
  let result = "";

  switch (type) {
    case "M":
      result = splitMethod(input);
      break;
    case "C":
      result = splitClass(input);
      break;
    case "V":
      result = splitVariable(input);
      break;
    default:
      return result;
  }

  return result;
}

function splitMethod(input) {
  let resultString = "";
  for (let index = 0; index < input.length - 2; index++) {
    if (input[index] === input[index].toUpperCase()) {
      resultString += " " + input[index].toLowerCase();
    } else {
      resultString += input[index];
    }
  }
  return resultString;
}

function splitClass(input) {
  let resultString = "";
  for (let index = 0; index < input.length; index++) {
    if (index === 0) {
      resultString += input[index].toLowerCase();
    } else if (input[index] === input[index].toUpperCase()) {
      resultString += " " + input[index].toLowerCase();
    } else {
      resultString += input[index];
    }
  }

  return resultString;
}

function splitVariable(input) {
  let resultString = "";
  for (let index = 0; index < input.length; index++) {
    if (input[index] === input[index].toUpperCase()) {
      resultString += " " + input[index].toLowerCase();
    } else {
      resultString += input[index];
    }
  }
  return resultString;
}

function combineInput(type, input) {
  let result = "";

  switch (type) {
    case "M":
      result = combineMethod(input);
      break;
    case "C":
      result = combineClass(input);
      break;
    case "V":
      result = combineVariable(input);
      break;
    default:
      return result;
  }

  return result;
}

function combineVariable(input) {
  let resultString = "";
  for (let index = 0; index < input.length; index++) {
    if (input[index] === " ") {
      continue;
    } else if (input[index - 1] === " " && index !== 0) {
      resultString += input[index].toUpperCase();
    } else {
      resultString += input[index];
    }
  }
  return resultString;
}

function combineMethod(input) {
  let resultString = "";
  for (let index = 0; index < input.length; index++) {
    if (input[index] === " ") {
      continue;
    } else if (input[index - 1] === " " && index !== 0) {
      resultString += input[index].toUpperCase();
    } else {
      resultString += input[index];
    }
  }
  return resultString + "()";
}

function combineClass(input) {
  let resultString = "";
  for (let index = 0; index < input.length; index++) {
    if (input[index] === " ") {
      continue;
    } else if (input[index - 1] === " " || index === 0) {
      resultString += input[index].toUpperCase();
    } else {
      resultString += input[index];
    }
  }
  return resultString;
}

module.exports = processData;
