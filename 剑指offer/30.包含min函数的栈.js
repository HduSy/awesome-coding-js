let stack = [], minStack = []

function push(node) {
    // write code here
    stack.push(node)
    let len = minStack.length
    if (len === 0 || node.val < min()) {
        minStack.push(node)
    } else {
        minStack.push(min())
    }
}

function pop() {
    // write code here
    minStack.pop()
    return stack.pop()
}

function top() {
    // write code here
    let len = minStack.length
    return len > 0 && minStack[len - 1] //len>0验证非常重要
}

function min() {
    // write code here
    let len = minStack.length
    return len > 0 && minStack[len - 1] //len>0验证非常重要
}