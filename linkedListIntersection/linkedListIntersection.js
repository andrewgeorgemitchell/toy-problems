/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  let matchingNode = false;
  let currentList1Node = list1.head;
  while (currentList1Node.next) {
    let currentList2Node = list2.head;
    while (currentList2Node.next) {
      if (currentList1Node.value === currentList2Node.value) {
        matchingNode = true;
      }
      currentList2Node = currentList2Node.next;
    }
    currentList1Node = currentList1Node.next
  }
  return matchingNode;
}


// Tests

// Build Linked Lists Nodes

const nodeListCreator = (nodeValuesArr) => {
  const resultsArr = [];
  for (let i = 0; i < nodeValuesArr.length; i++) {
    resultsArr.push(Node(nodeValuesArr[i]));
    if (i > 0) {
      resultsArr[i - 1].next = resultsArr[i];
    }
  }
  return resultsArr;
}

const list1NodeValues = ['A', 'B', 'C', 'D', 'E', 'F'];
const [ nodeA, nodeB, nodeC, nodeD, nodeE, nodeF ] = nodeListCreator(list1NodeValues);

const list2NodeValues = ['G', 'H', 'I'];
const [ nodeG, nodeH, nodeI ] = nodeListCreator(list2NodeValues);

nodeI.next = nodeD;

// Build Linked Lists

const list1 = {
  head: nodeA,
}

const list2 = {
  head: nodeG,
}

console.log(linkedListIntersection(list1, list2))