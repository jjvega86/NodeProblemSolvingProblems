function diagonalDifference(arr) {
  let firstSum = 0;
  let secondSum = 0;
  let len = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    firstSum += arr[i][i];
    secondSum += arr[i][len - i];
  }

  return Math.abs(firstSum - secondSum);
}

module.exports = diagonalDifference;
