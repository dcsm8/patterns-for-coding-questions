/**
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.print;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(-1);
  let current = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      current = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = list2;
      list2 = list2.next;
    }
  }

  if (list1 !== null) {
    current.next = list1;
  }

  if (list2 !== null) {
    current.next = list2;
  }

  return head.next;
};

function linkedList(arr) {
  return arr.reduceRight((next, value) => new ListNode(value, next), null);
}

console.log(
  `merged list: ${mergeTwoLists(linkedList([1, 2, 4]), linkedList([1, 3, 4]))}`
);
console.log(`merged list: ${mergeTwoLists(linkedList([]), linkedList([]))}`);
console.log(`merged list: ${mergeTwoLists(linkedList([]), linkedList([0]))}`);
