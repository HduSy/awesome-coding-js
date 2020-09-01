function isCircle(head) {
    let fast = head, slow = head
    // .next前的玩意儿要判断一下是否存在,否则.next是null,null.next异常程序崩溃
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }
    return false
}