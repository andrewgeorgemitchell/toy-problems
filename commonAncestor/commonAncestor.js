
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  const child1Ancestry = this.getAncestorPath(child1);
  const child2Ancestry = this.getAncestorPath(child2);
  const longestLength = child1Ancestry >= child2Ancestry ? child1Ancestry.length : child2Ancestry.length;
  let oldestAncestor;
  for (let i = 0; i < longestLength; i += 1) {
    const ancestor1 = child1Ancestry[i];
    const ancestor2 = child2Ancestry[i];
    if (ancestor1 === ancestor2) {
      oldestAncestor = `my ${ancestor1.value}`
    }
  }
  return oldestAncestor;
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(child) {
  const iterator = (currentTree, currentPath) => {
    for (let i = 0; i < currentTree.children.length; i += 1) {
      const currentChild = currentTree.children[i];
      if (currentChild.value === child.value) {
        currentPath = [...currentPath, currentChild.value]
        return currentPath;
      }
      if (currentChild.children.length > 0) {
        currentPath = [...currentPath, currentChild.value]
        return iterator(currentChild, currentPath)
      }
    }
  }
  const root = this;
  return iterator(root, [root.value]);
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

var grandma = new Tree('grandma');
var cousin = new Tree('cousin');
var mom = new Tree('mom');
grandma.addChild(mom);
grandma.addChild(cousin);
var me = new Tree('me');
var brother = new Tree('brother');
mom.addChild(me);
mom.addChild(brother);
console.log(grandma.getAncestorPath(cousin));
console.log(grandma.getClosestCommonAncestor(me, brother));
console.log(grandma.getClosestCommonAncestor(me, cousin));
