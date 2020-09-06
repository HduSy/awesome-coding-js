function getKNode(head, k) {
    let fast = head, slow = head
    // 循环k次可以这样写
    while (k-- > 0) {
        fast = fast.next
    }
    while (fast !== null) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}

let k = 5
while (k-- > 0) {
    console.log(k)
}