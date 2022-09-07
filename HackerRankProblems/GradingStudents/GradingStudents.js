/**
 * Given the initial value of grade for each of a teacher's students
 * write code to automate a rounding process
 * Rules:
 *      If the difference between grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5
 *      If the value of grade is less than 40, no rounding occurs (failing grade)
 * @param {number[]} grades Student grades before rounding
 * @returns {number[]} grades after rounding
 * Time Complexity: O(N) Linear
 */
function gradingStudents(grades) {
  let roundedGrades = [];

  grades.forEach((grade) => {
    let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
    if (grade < 38 || nextMultipleOfFive - grade >= 3) {
      roundedGrades.push(grade);
    } else {
      roundedGrades.push(nextMultipleOfFive);
    }
  });

  return roundedGrades;
}

module.exports = gradingStudents;
