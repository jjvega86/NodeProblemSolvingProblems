const LinkedList = require("./classes/LinkedList");

let list = new LinkedList([1, 2, 4]);
let list2 = new LinkedList([1, 3, 5]);

function addTwoNumbers(linkedList1, linkedList2) {
  // traverse each linkedlist, one at a time
  // add the data on each node to a single string value, then parse to an int
  // add both parsed values together into a single final value
  // split the final value into an array and return
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

let result = addTwoNumbers(list, list2);
result.printNodeData();
