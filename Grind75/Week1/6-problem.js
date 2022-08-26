/**
 * 226. Invert Binary Tree
 *
 * Given the root of a binary tree,
 * invert the tree, and return its root.
 *
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  invertNodes(root);
  return root;
};

/**
 * @param {TreeNode} node
 */
var invertNodes = function (node) {
  if (node) {
    const tmpNode = node.left;
    node.left = node.right;
    node.right = tmpNode;

    invertNodes(node.left);
    invertNodes(node.right);
  } else {
    return null;
  }
};

var buildTreeLeetCode = function (inputArray) {
  const root = new TreeNode(inputArray.shift());
  const queue = [root];
  while (queue.length > 0 && inputArray.length > 0) {
    const curNode = queue.shift();
    const leftVal = inputArray.shift();
    const rightVal = inputArray.shift();
    if (leftVal !== null) {
      curNode.left = new TreeNode(leftVal);
      queue.push(curNode.left);
    }
    if (rightVal !== null) {
      curNode.right = new TreeNode(rightVal);
      queue.push(curNode.right);
    }
  }

  return root;
};

console.log(invertTree(buildTreeLeetCode([4, 2, 7, 1, 3, 6, 9])));
