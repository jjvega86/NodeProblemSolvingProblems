/**
 *
 * @param {Array<Integer>} arr integer numbers, unsorted, non-negative
 */
function miniMaxSum(arr) {
  // Sorting the array first
  // Then finding the minimum sum of numbers (will be all numbers minus max value)
  // Then finding the maximum sum of numbers (will be all numbers minus min value)
  let sortedArray = arr.sort((a, b) => a - b);
  let minSum = sortedArray.slice(0, 4).reduce((a, b) => a + b);
  let maxSum = sortedArray.slice(1).reduce((a, b) => a + b);

  console.log(`${minSum} ${maxSum}`);
}

module.exports = miniMaxSum;
