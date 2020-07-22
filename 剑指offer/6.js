/**
 * self
 * @param list
 */
function printETH(list) {
    let stack = []
    for (let i of list) {
        stack.push(i)
    }
    while (stack.length > 0) {
        console.log(stack.pop())
    }
}

let testList = [1, 2, 3, 4]
printETH(testList)


function ListNode(value) {
    this.value = value
    this.next = null
}

function printListFromTailToHead(head) {
    let queue = []
    while (head) {
        queue.unshift(head.value)
        head = head.next
    }
    return queue
}
