/**
 * 反转链表
 * description:每次head.next指向currentNode.next节点，将currentNode排在头节点前并更新新的头节点headNode
 * head指向的节点一步步往后游走
 * @param head
 * @returns {*}
 */
function reverseList(head) {
    let cur = null
    let headNode = head
    while (head && head.next) {
        cur = head.next
        head.next = cur.next
        cur.next = headNode
        headNode = cur
    }
    return headNode
}