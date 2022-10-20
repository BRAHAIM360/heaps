export class minHeap {
  items = [];
  getSize() {
    return this.items.length;
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  getParrenIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasLeft(index) {
    return this.getLeftChildIndex(index) < this.getSize();
  }
  hasRight(index) {
    return this.getRightChildIndex(index) < this.getSize();
  }
  hasparrent(index) {
    return this.getParrenIndex(index) >= 0;
  }

  getLeft(index) {
    return this.items[this.getLeftChildIndex(index)];
  }
  getRight(index) {
    return this.items[this.getRightChildIndex(index)];
  }
  getParrent(index) {
    return this.items[this.getParrenIndex(index)];
  }

  peek() {
    if (this.getSize() === 0) throw "heap empty";
    return this.items[0];
  }
  pop() {
    if (this.getSize() === 0) throw "heap empty";
    if (this.getSize() === 1) return this.items.pop();
    let item = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifydown();
    return item;
  }

  add(val) {
    this.items.push(val);
    this.heapifyup();
  }

  heapifyup() {
    let index = this.getSize() - 1;
    while (
      this.hasparrent(index) &&
      this.getParrent(index) > this.items[index]
    ) {
      this.swap(this.getParrenIndex(index), index);
      index = this.getParrenIndex(index);
    }
  }

  heapifydown() {
    let index = 0;
    while (this.hasLeft(index)) {
      let smallChildindex = this.getLeftChildIndex(index);
      if (this.hasRight(index) && this.getRight(index) < this.getLeft(index)) {
        smallChildindex = this.getRightChildIndex(index);
      }
      if (this.items[index] < this.items[smallChildindex]) break;
      this.swap(index, smallChildindex);
      index = smallChildindex;
    }
  }
  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }
}
