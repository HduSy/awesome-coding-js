/**
 * 非递归版本
 * @param l1
 * @param l2
 * @returns {null}
 * @constructor
 */
function Merge(l1, l2) {
    let head = new ListNode(0)
    let cur = head
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            cur = cur.next
            l1 = l1.next
        } else {
            cur.next = l2
            cur = cur.next
            l2 = l2.next
        }
    }
    if (l1) cur.next = l1
    if (l2) cur.next = l2
    return head.next
}

function Merge(l1, l2) {
    if (!l1)
        return l2
    if (!l2)
        return l1
    let head = null
    if (l1.val < l2.val) {
        head = l1
        head.next = Merge(l1.next, l2)
    } else {
        head = l2
        head.next = Merge(l1, l2.next)
    }
    return head
}