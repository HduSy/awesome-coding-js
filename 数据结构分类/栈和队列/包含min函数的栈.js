let dataStack = []
let minValStack = []

function push(node) {
    dataStack.push(node)
    if (minValStack.length === 0 || node.val < min()) {
        minValStack.push(node)
    } else {
        minValStack.push(min())
    }
}

function pop() {
    minValStack.pop()
    return dataStack.pop()
}

function top() {
    let length = dataStack.length
    return length > 0 && dataStack[length - 1]
}

/**
 * 栈顶永远是当前栈中最小值
 * @returns {boolean|*}
 */
function min() {
    let length = minValStack.length
    return length > 0 && minValStack[length - 1]
}