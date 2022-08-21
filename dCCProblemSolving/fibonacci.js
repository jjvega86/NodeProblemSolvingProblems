/* A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. 

Write a method that does the Fibonacci sequence starting at 1 

HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs  */

function fibonacciGenerator(
  numberOfIterations,
  startingNumber,
  sequence = [],
  counter = 0
) {
  // grab the previous two numbers of the sequence array and add them together
  // add that sum to the end of the sequence array
  // repeat for the number of times specified by numberOfIterations
  // try to do this recursively
  if (sequence.length === 0) {
    sequence.push(startingNumber);
  }
  if (counter < numberOfIterations) {
    let currentIndex = sequence.length;
    sequence[currentIndex] =
      undefinedConverter(sequence[currentIndex - 1]) +
      undefinedConverter(sequence[currentIndex - 2]);
    return fibonacciGenerator(
      numberOfIterations,
      startingNumber,
      sequence,
      counter + 1
    );
  } else {
    return sequence;
  }
}

function undefinedConverter(value) {
  if (typeof value === "undefined") {
    return 0;
  } else {
    return value;
  }
}

module.exports = fibonacciGenerator;
