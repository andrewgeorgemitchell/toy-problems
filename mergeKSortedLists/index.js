/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  const iterator = (heads) => { // 3, 2
    // Sorts current heads
    const newHeads = [heads[0].next];
    let currentHead = heads[0];
    let currentTail = heads[0];
    for (let i = 1; i < heads.length; i++) {
      if (heads[i]) {
        if (!currentHead) {
          currentHead = heads[i];
          currentTail = heads[i];
        }
        const { val, next } = heads[i];
        newHeads.push(next);
        if (val <= currentHead.val) {
          const oldCurrentHead = currentHead;
          currentHead = heads[i];
          currentHead.next = oldCurrentHead;
          currentTail = oldCurrentHead;
        } else if (val > currentHead.val) {
          currentHead.next = heads[i]
          currentTail = heads[i]
        }
      }
    } 
    return [currentHead, currentTail, newHeads];
  }

  let [listHead, listTail, heads] = iterator(lists);
  while (heads.filter((head) => head).length > 0) {
    let [newListHead, newListTail, newHeads] = iterator(heads);
    listTail.next = newListHead;
    listTail = newListTail;
    heads = newHeads;
  }
  return listHead
};

// List 1
const object1 = {
  val: 10,
  next: null
}

const object2 = {
  val: 6,
  next: object1
}

const object3 = {
  val: 2,
  next: object2
}

// List 2
const object4 = {
  val: 8,
  next: null
}

const object5 = {
  val: 5,
  next: object4
}

const object6 = {
  val: 3,
  next: object5
}

const lists = [
  object6, // => object 5 => object 4
  object3,
];

console.log(mergeKLists(lists))

// if two values are the same in the different linked lists
// object5.val = 6;
// console.log(mergeKLists(lists))