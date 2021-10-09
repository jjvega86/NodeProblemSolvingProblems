/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Write a function that takes an array of numbers and a target. Return the indices of numbers in the array that equal the sum of the target */

//I will iterate over every number of the array
//For each number, I will try adding it to every other number in the array
//I will check each sum against the target
//If I find a matching sum, I will take both numbers and add them to a final array
//I will then return the final array

// Brute force, O(n*2)
function twoSum(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    for (let index2 = 0; index2 < nums.length; index2++) {
      if (index2 === index) {
        continue;
      }
      let sum = nums[index] + nums[index2];
      if (sum === target) {
        return [index, index2];
      }
    }
  }
}

// Using an object to map key values O(n)
function twoSumNext(nums, target) {
  let map = {};
  for (let index = 0; index < nums.length; index++) {
    // iterate through each number in the array
    // subtract the number from the target
    // check to see if the remainder exists in the map
    // if it does, grab the index of that value and the index of the current number
    // return both in an array
    let difference = target - nums[index];
    if (Object.values(map).includes(difference)) {
      return [
        parseInt(Object.keys(map).find((number) => map[number] === difference)),
        index,
      ];
    } else {
      map[index] = nums[index];
    }
  }
}

module.exports = {
  twoSum,
  twoSumNext,
};
