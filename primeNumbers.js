function isPrimeNumber(numberToCheck) {
  for (let index = 2; index < numberToCheck; index++) {
    if (numberToCheck % index === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrimeNumber;
