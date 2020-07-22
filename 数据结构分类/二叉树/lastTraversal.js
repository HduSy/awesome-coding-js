/**
 * 非递归版本
 * @param node
 * @param array
 */
function lastTraversal(node, array) {
    if (node) {
        lastTraversal(node.left, array)
        lastTraversal(node.right, array)
        array.push(node.data)
    }
}

function lastOrderTraversal(node) {
    const result = []
    const stack = []
    let last = null // 标记上一个访问的节点
    let current = node
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack[stack.length - 1]
        if (!current.right || current.right === last) {
            current = stack.pop()
            result.push(current.data)

            last = current
            current = null // 继续弹栈
        } else {
            current = current.right
        }
    }
    return result
}

function selfCode(root) {
    let stack = []
    let res = []
    let current = root
    let last = null //上次访问节点
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack[stack.length - 1] //栈顶节点
        if (!current.right || current.right === last) {
            current = stack.pop()
            res.push(current)
            last = current
            current = null //不执行第一个while 该if第二个判断为true 继续弹栈
        } else {
            current = current.right
        }
    }
}
