function ListNode(val) {
    this.val = val
    this.next = null
}

function printListFromTailToHead(head) {
    let res = []
    while (head) {
        res.unshift(head.val)
        head = head.next
    }
    return res
}

let headNode = new ListNode(1)
let secondNode = new ListNode(2)
let thirdNode = new ListNode(3)
headNode.next = secondNode
secondNode.next = thirdNode

console.log(printListFromTailToHead(headNode))