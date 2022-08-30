/**
 *There is a collection of input strings and a collection of query strings. 
 For each query string, determine how many times it occurs in the list of input strings. 
 Return an array of the results.

 Big O - O(n^2) due to nested forEach loops. Steps will increase exponentially with input size.
 * @param {string[]} strings an Array of strings to search
 * @param {string[]} queries an Array of strings to query with
 * @returns {number[]} an Array of numbers counting substring matches between queries and strings
 */
function matchingStrings(strings, queries) {
  let matches = [];
  let currentQueryIndex = 0;
  queries.forEach((query) => {
    matches[currentQueryIndex] = 0;
    strings.forEach((string) => {
      if (query === string) {
        matches[currentQueryIndex]++;
      }
    });
    currentQueryIndex++;
  });
  return matches;
}

module.exports = matchingStrings;
