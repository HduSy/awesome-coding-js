function detectCircleStart(head) {
    let fast = head, slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) break
    }
    if (fast === null || fast.next === null) return null
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}