const breakingRecords = require("./BreakingTheRecords");

test("checks 4 games with 1 beating maximum score and 1 beating minimum score", () => {
  let scores = [12, 24, 10, 24];
  expect(breakingRecords(scores)).toEqual([1, 1]);
});

test("checks 9 games with 2 beating maximum score and 4 beating minimum score", () => {
  let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
  expect(breakingRecords(scores)).toEqual([2, 4]);
});

test("checks 10 games with 4 beating maximum score and 0 beating minimum score", () => {
  let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
  expect(breakingRecords(scores)).toEqual([4, 0]);
});
