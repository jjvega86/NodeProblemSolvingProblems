const processData = require("./CamelCaseFour");

test("plasticCup() method becomes plastic cup string", () => {
  let input = "S;M;plasticCup()";
  expect(processData(input)).toBe("plastic cup");
});

test("mobile phone string becomes mobilePhone variable", () => {
  let input = "C;V;mobile phone";
  expect(processData(input)).toBe("mobilePhone");
});

test("coffee machine string becomes CoffeeMachine class", () => {
  let input = "C;C;coffee machine";
  expect(processData(input)).toBe("CoffeeMachine");
});

test("large software book string becomes LargeSoftwareBook class", () => {
  let input = "S;C;LargeSoftwareBook";
  expect(processData(input)).toBe("large software book");
});

test("whiteSheetOfPaper() method becomes white sheet of paper string", () => {
  let input = "C;M;white sheet of paper";
  expect(processData(input)).toBe("whiteSheetOfPaper()");
});

test("pictureFrame variable becomes picture frame string", () => {
  let input = "S;V;pictureFrame";
  expect(processData(input)).toBe("picture frame");
});
