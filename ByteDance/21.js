/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 21 合并两个有序链表
 * 递归解法
 * 知道函数功能，不进入细节相信函数可以完成任务
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null)
        return l2
    if (l2 === null)
        return l1
    else if (l1.value < l2.value) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
/**
 * 迭代解法
 * 哪个链表当前节点值小 就跟着哪个链表上节点
 * @param l1
 * @param l2
 */
mergeTwoLists = function (l1, l2) {
    let prehead = new ListNode(-1)
    let pre = prehead
    while (l1 !== null && l2 !== null) {
        if (l1.val > l2.val) {
            pre.next = l2
            l1 = l1.next
        } else {
            pre.next = l1
            l2 = l2.next
        }
        pre = pre.next
    }
    //while循环结束 至多一个链表到达尾部，指针为空，另外一个直接拼接剩余
    pre.next = l1 == null ? l2 : l1
    return prehead.next
}