const LinkedList = require("./classes/LinkedList");

/* 
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example of usage

let list = new LinkedList([1, 2, 4]);
let list2 = new LinkedList([1, 3, 5]);

421 + 531 // Inputs (data from both lists reversed, combined into single integers, then added together)
let result = addTwoNumbers(list, list2);
result.printNodeData(); //Output: 952 */

function addTwoNumbers(linkedList1, linkedList2) {
  // traverse each linkedlist, one at a time
  // add the data on each node to a single string value, then parse to an int
  // add both parsed values together into a single final value
  // split the final value into an array and return LinkedList from the array
  let firstNumber = "";
  let secondNumber = "";
  for (let val of linkedList1.yieldValues()) {
    firstNumber += val.toString();
  }
  for (let val of linkedList2.yieldValues()) {
    secondNumber += val.toString();
  }
  let finalNumber =
    parseInt(firstNumber.split("").reverse().join("")) +
    parseInt(secondNumber.split("").reverse().join(""));
  let finalList = new LinkedList(
    finalNumber
      .toString()
      .split("")
      .map((number) => parseInt(number))
  );
  return finalList;
}

module.exports = addTwoNumbers;
