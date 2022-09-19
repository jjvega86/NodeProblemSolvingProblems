const diagonalDifference = require("./DiagonalDifference");

test("should equal 15", () => {
  expect(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]).toBe(15)
  );
});

test("should equal 2", () => {
  expect(
    diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ]).toBe(2)
  );
});
