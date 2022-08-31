/**
 * Big O - O(n^2). Technically reduce is a nested loop, since it will iterate over all elements in the array within a loop that is iterating over all elements in the array (worst case scenario)
 * Goal: find and return the single unique integer in the Array
 * @param {number[]} a Array of Integers (unsorted) with a single unique element
 * @returns {number} the unique element in the array
 */
function lonelyInteger(a) {
  let uniqueInteger = 0;

  for (let index = 0; index < a.length; index++) {
    // using reduce to calculate how many times an integer appears in the array
    // if the count is 1, we have the lonely integer
    let count = a.reduce(
      (total, value) => (a[index] === value ? total + 1 : total + 0),
      0
    );

    if (count === 1) {
      uniqueInteger = a[index];
      break;
    }
  }
  return uniqueInteger;
}

module.exports = lonelyInteger;
