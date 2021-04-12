const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.sizeQ = 0;
    this.firstEl = null;
    this.lastEl = null;
  }

  get size() {
    return this.sizeQ;
  }

  enqueue(el) {
    const newNode = new ListNode(el);
    if (!this.size) {
      this.firstEl = newNode;
      this.lastEl = newNode;
      this.sizeQ++;
      return;
    }
    this.sizeQ++;
    this.lastEl.next = newNode;
    this.lastEl = this.lastEl.next;
  }

  dequeue() {
    if (!this.size) {
      return null;
    }
    const el = this.firstEl;
    this.firstEl = this.firstEl.next;
    return el.value;
  }
}

module.exports = Queue;
