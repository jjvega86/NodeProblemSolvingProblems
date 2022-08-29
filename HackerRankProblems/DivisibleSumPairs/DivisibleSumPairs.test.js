const divisibleSumPairs = require("./DivisibleSumPairs");

test("There are 5 pairs given divisor 3 and array [1,3,2,6,1,2]", () => {
  expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
});

test("There are 3 pairs given divisor 5 and array [1,2,3,4,5,6]", () => {
  expect(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])).toBe(3);
});
