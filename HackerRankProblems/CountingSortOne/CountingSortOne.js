function countingSort(arr) {
  let counts = generateCountArray(100);
  arr.forEach((el) => {
    counts[el]++;
  });
  return counts;
}

function generateCountArray(numberOfElements) {
  let countArray = [];
  for (let index = 0; index < numberOfElements; index++) {
    countArray.push(0);
  }
  return countArray;
}

module.exports = countingSort;
