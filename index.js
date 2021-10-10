const Node = require("./classes/Node");
const LinkedList = require("./classes/LinkedList");

let list = new LinkedList();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

list.addNode(node1);
list.addNode(node2);
list.addNode(node3);

list.printNodes();
