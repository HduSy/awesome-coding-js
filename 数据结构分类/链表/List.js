function ListNode(data, next) {
    this.data = data
    this.next = null
}

function fromTailtoHead(head) {
    const array = []
    while (head) {
        array.unshift(head.data)
        head = head.next
    }
    return array
}