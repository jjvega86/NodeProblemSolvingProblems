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

module.exports = twoSum;
