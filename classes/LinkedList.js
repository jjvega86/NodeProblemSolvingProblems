const Node = require("../classes/Node");

class LinkedList {
  constructor(iterable) {
    this.head = null;
    this.nodeCount = 0;
    this.initializeList(iterable);
  }
  //* This method will run automatically when linked list is created. Iterable is passed in when list is instantiated
  initializeList(iterable) {
    for (let element of iterable) {
      let node = new Node(element);
      this.addNode(node);
    }
  }

  addNode(nodeToAdd) {
    if (this.head === null) {
      this.head = nodeToAdd;
      this.nodeCount++;
    } else {
      nodeToAdd.next = this.head;
      this.head = nodeToAdd;
      this.nodeCount++;
    }
  }

  printNodes() {
    let current = this.head;
    for (let index = 0; index < this.nodeCount; index++) {
      console.log(current);
      current = current.next;
    }
  }
  *yieldValues() {
    let current = this.head;
    for (let index = 0; index < this.nodeCount; index++) {
      yield current.data;
      current = current.next;
    }
  }
}

module.exports = LinkedList;
