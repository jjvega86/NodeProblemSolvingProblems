class LinkedList {
  constructor() {
    this.head = null;
    this.nodeCount = 0;
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
}

module.exports = LinkedList;
