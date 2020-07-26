/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 删除链表倒数第N个节点
 * 倒数第N=正数L-N+1 因此找到L-N
 * 两次循环
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let length = 0
    let first = head
    //获取链表长度
    while (first) {
        length++
        first = first.next
    }
    length -= n
    first = dummy
    while (length > 0) {
        length--
        first = first.next
    }
    first.next = first.next.next
    return dummy.next
};
/**
 * 双指针法
 * 一次循环
 * dummy节点是为了避免删除节点为头节点是无法直接返回头节点
 * @param head
 * @param n
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let start = dummy, end = dummy

    for (let i = 0; i < n + 1; i++) {
        start = start.next
    }
    while (start) {
        start = start.next
        end = end.next
    }
    end.next = end.next.next
    return dummy.next
}