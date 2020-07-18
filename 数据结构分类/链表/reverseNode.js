/**
 * 反转链表
 * @param head
 * @returns {*}
 */
function reverseNode(head) {
    let headNode = head
    let currentNode = null
    //head并未更新是否有问题？
    while (head && head.next) {
        currentNode = head.next
        head.next = currentNode.next

        currentNode.next = headNode
        headNode = currentNode
    }
    return headNode
}

function self(head) {
    let pre = head
    let cur = head.next
    while (pre && cur) {
        let third = cur.next
        cur.next = pre
        pre = cur
        cur = third
    }
    return cur
}