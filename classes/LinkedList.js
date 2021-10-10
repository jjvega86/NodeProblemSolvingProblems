const Node = require("../classes/Node");

class LinkedList {
  constructor(iterable) {
    this.head = null;
    this.nodeCount = 0;
    this.initializeList(iterable);
  }
  //* This method will run automatically when linked list is created. Iterable is passed in when list is instantiated
  initializeList(iterable) {
    try {
      for (let element of iterable) {
        let node = new Node(element);
        this.addNode(node);
      }
    } catch (error) {
      throw new Error("Iterable not passed into constructor!");
    }
  }

  addNode(data) {
    let nodeToAdd = new Node(data);
    if (this.head === null) {
      this.head = nodeToAdd;
      this.nodeCount++;
    } else {
      nodeToAdd.next = this.head;
      this.head = nodeToAdd;
      this.nodeCount++;
    }
  }

  printNodeData() {
    for (let val of this.yieldValues()) {
      console.log(val);
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
