const Node = require("./classes/Node");
const LinkedList = require("./classes/LinkedList");

let list = new LinkedList();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

list.addNode(node1);
list.addNode(node2);
list.addNode(node3);

/* for (const val of list.yieldValues()) {
  console.log(val);
}
 */
const listData = list.yieldValues();

console.log(listData.next().value);

function addTwoNumbers(linkedList1, linkedList2) {
  //traverse each linkedlist, one at a time
  //add the data on each node to a single string value, then parse to an int
  // add both parsed values together into a single final value
  // split the final value into an array and return
  let firstNumber = "";
  let secondNumber = "";
}
