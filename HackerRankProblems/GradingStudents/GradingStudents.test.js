const gradingStudents = require("./GradingStudents");

test("Grades 84, 29, 57 become 85, 29, 57", () => {
  expect(gradingStudents([84, 29, 57])).toEqual([85, 29, 57]);
});

test("Grades 82, 29, 58 become 82, 29, 60", () => {
  expect(gradingStudents([82, 29, 58])).toEqual([82, 29, 60]);
});

test("Grades 78, 41, 37 become 80, 41, 37", () => {
  expect(gradingStudents([78, 41, 37])).toEqual([80, 41, 37]);
});

test("Grades 73, 67, 38, 33 become 75, 67, 40, 33", () => {
  expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
});
