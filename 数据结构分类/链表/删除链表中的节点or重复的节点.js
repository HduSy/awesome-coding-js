function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * O(1)
 * @param head
 * @param node
 * @returns {null}
 */
var deleteNode = function (head, node) {
    if (node.next) {
        node.val = node.next.val
        node.next = node.next.next
    } else if (node === head) {
        head = null
        node = null
    } else {
        let pre = new ListNode(-1)
        pre.next = head

        let node = pre
        while (node.next) {
            node = node.next
        }
        node = null
    }
    return head
};
/**
 * 剑指offer改 O(n)
 * @param head 头指针==头节点
 * @param val 要删除的节点的值
 * 返回头节点
 */
deleteNode = function (head, val) {
    let pre = new ListNode(-1)
    pre.next = head

    let node = pre
    //删除节点需要前序节点
    while (node.next) {
        if (node.next.val === val) {
            node.next = node.next.next
            break
        }
        node = node.next
    }
    return pre.next
};

function deleteDuplication(head) {
    let map = {}
    let current = head
    while (current) {
        let val = map[current.val]
        map[current.val] = val ? val + 1 : 1
        current = current.next
    }
    let pre = new ListNode(-1)
    pre.next = head

    let node = pre
    while (node.next) {
        if (map[node.val] > 1) {
            if (node.next) {
                node.val = node.next.val
                node.next = node.next.next
            } else if (node === head) {
                node = null
                head = null
            } else {
                while (node.next.next) {
                    node = node.next
                }
                node.next = null
            }
        } else {
            node = node.next
        }
    }
    return pre.next
}