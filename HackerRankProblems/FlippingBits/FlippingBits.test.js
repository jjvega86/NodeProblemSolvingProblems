const flippingBits = require("./FlippingBits");

test("Integer 2147483647 becomes Integer 2147483648", () => {
  expect(flippingBits(2147483647)).toBe(2147483648);
});

test("Integer 1 becomes Integer 4294967294", () => {
  expect(flippingBits(1)).toBe(4294967294);
});

test("Integer 0 becomes Integer 4294967295", () => {
  expect(flippingBits(0)).toBe(4294967295);
});
