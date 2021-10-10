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
      this.head.next = nodeToAdd;
      this.nodeCount++;
    }
  }
}
