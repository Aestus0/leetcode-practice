/**
*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
*
*You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*
*Example
*
*Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
*Output: 7 -> 0 -> 8
*Explanation: 342 + 465 = 807.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const arr = [];
    let listNode = {};
    (l1 || l2) && f(arr, l1, l2, 0);
    for (let i = arr.length - 1; i >= 0; i--){
        listNode.val = arr[i];
        if(i-1 >= 0){
            let node = {};
            node.next = listNode;
            listNode = node;
        }
    }
    return listNode;
};

function f(arr, l1, l2, n) {
    if (!l1 && !l2) {
        n && arr.push(n);
        return;
    }
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + n;
    const m = ~~(sum / 10); // OR (sum / 10) >> 0 OR (sum / 10) | 0

    arr.push(sum % 10);
    f(arr, l1 && l1.next, l2 && l2.next, m);
}
let l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};

let l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
};
console.log(addTwoNumbers(l1,l2));
