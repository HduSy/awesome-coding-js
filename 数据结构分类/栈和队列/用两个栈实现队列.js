/**
 * 两栈实现队列
 * 栈底相接
 * @type {*[]}
 */
let stack1 = [], stack2 = []

function push(node) {
    stack1.push(node)
}

function pop() {
    if (stack2.length === 0) {
        while (stack1.length > 0) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop() || null
}

/**
 * 两个队列实现栈
 * 两个队列各自由push shift完成FIFO
 * @type {*[]}
 */
let queue1 = [], queue2 = []

function enqueque(node) {
    if (queue1.length === 0) {
        queue1.push(node)
        while (queue2.length) {
            queue1.push(queue2.shift())
        }
    } else if (queue2.length === 0) {
        queue2.push(node)
        while (queue1.length) {
            queue2.push(queue1.shift())
        }
    }
}

function dequeue() {
    if (queue1.length !== 0) {
        return queue1.shift()
    } else {
        return queue2.shift()
    }
}