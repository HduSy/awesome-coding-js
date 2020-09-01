function detectCircleStart(head) {
    let fast = head, slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) break
    }
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}