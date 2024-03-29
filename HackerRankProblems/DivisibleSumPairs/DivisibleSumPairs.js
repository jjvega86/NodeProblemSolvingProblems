/*
Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k

Example

ar = [1,2,3,4,5,6]
k = 5

Three pairs meet criteria:
[1,4], [2,3], [4,6]

*/

/**
 * Big O - O(n^2). Steps increase exponentially with input size.
 * @param {number} n length of array "ar"
 * @param {number} k the integer divisor
 * @param {number[]} ar an array of integers
 * @returns {number} the number of pairs
 */
function divisibleSumPairs(n, k, ar) {
  let pairCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0 && i < j) {
        pairCount++;
      }
    }
  }

  return pairCount;
}

module.exports = divisibleSumPairs;
