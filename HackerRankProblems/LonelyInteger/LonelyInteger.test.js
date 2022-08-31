const lonelyInteger = require("./LonelyInteger");

test("Unique element is 4 from array [1,2,3,4,3,2,1]", () => {
  expect(lonelyInteger([1, 2, 3, 4, 3, 2, 1])).toBe(4);
});

test("Unique element is 12 from array [33, 33, 44, 44, 12, 18, 18]", () => {
  expect(lonelyInteger([33, 33, 44, 44, 12, 18, 18])).toBe(12);
});

test("Unique element is 1 from array [3,3,2,2,1]", () => {
  expect(lonelyInteger([3, 3, 2, 2, 1])).toBe(1);
});
