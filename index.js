const Node = require("./classes/Node");
const LinkedList = require("./classes/LinkedList");

let list = new LinkedList([1, 2, 4]);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

let list2 = new LinkedList();
let node4 = new Node(1);
let node5 = new Node(2);
let node6 = new Node(4);

list.addNode(node1);
list.addNode(node2);
list.addNode(node3);

list2.addNode(node4);
list2.addNode(node5);
list2.addNode(node6);

/* for (const val of list.yieldValues()) {
  console.log(val);
}
 */

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
  let finalList = new LinkedList();
}

addTwoNumbers(list, list2);
