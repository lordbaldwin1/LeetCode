/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let small = head;
    let large = head;
    while (large && large.next) {
        small = small.next;
        large = large.next.next;
        if (small === large) {
            return true
        }
    }
    return false
};