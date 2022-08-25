const processData = require("./CamelCaseFour");

test("plasticCup() method becomes plastic cup string", () => {
  let input = "S;M;plasticCup()";
  expect(processData(input)).toBe("plastic cup");
});

test("bigGlassBottleOfRum() method becomes big glass bottle of rum string", () => {
  let input = "S;M;bigGlassBottleOfRum()";
  expect(processData(input)).toBe("big glass bottle of rum");
});

test("mobile phone string becomes mobilePhone variable", () => {
  let input = "C;V;mobile phone";
  expect(processData(input)).toBe("mobilePhone");
});

test("my really big variable string becomes myReallyBigVariable string", () => {
  let input = "C;V;my really big variable";
  expect(processData(input)).toBe("myReallyBigVariable");
});

test("coffee machine string becomes CoffeeMachine class", () => {
  let input = "C;C;coffee machine";
  expect(processData(input)).toBe("CoffeeMachine");
});

test("LargeSoftwareBook class becomes large software book string", () => {
  let input = "S;C;LargeSoftwareBook";
  expect(processData(input)).toBe("large software book");
});

test("MyReallyLargeClassOfStuff class becomes my really large class of stuff string", () => {
  let input = "S;C;MyReallyLargeClassOfStuff";
  expect(processData(input)).toBe("my really large class of stuff");
});

test("white sheet of paper string becomes whiteSheetOfPaper() method", () => {
  let input = "C;M;white sheet of paper";
  expect(processData(input)).toBe("whiteSheetOfPaper()");
});

test("pictureFrame variable becomes picture frame string", () => {
  let input = "S;V;pictureFrame";
  expect(processData(input)).toBe("picture frame");
});
