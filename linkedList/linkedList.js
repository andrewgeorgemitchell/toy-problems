/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  const newNode = this.makeNode(value);
  if (!this.head && !this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  let value;
  if (this.head) {
    value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  } else {
    value = this.head;
  }
  return value;
};

LinkedList.prototype.contains = function(value) {
  let currentNode = this.head;
  while (currentNode) {
    if (value === currentNode.value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  return {
    value,
    next: null,
  }
};

var list = new LinkedList();
console.log(list.tail);         //yields 'null'
console.log(list.addToTail(4));
console.log(list.addToTail(5));
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
console.log(list.removeHead()); //yields '4');
console.log(list.tail.value);   //yields ')5';
console.log(list.removeHead()); //yields '5';)
console.log(list.removeHead()); //yields 'null)';
