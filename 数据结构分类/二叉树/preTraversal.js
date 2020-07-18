/**
 * 非递归版本
 * @param node
 * @param array
 */
function preTraversal(node, array) {
    if (node) {
        array.push(node)
        this.preTraversal(node.left, array)
        this.preTraversal(node.right, array)
    }
}

function preOrderTraversal(root) {
    let stack = []
    let result = []
    let current = root
    while (current || stack.length > 0) {
        while (current) {
            result.push(current.data) //中
            stack.push(current)
            current = current.left
        }
        current = stack.pop() //左
        current = current.right //右
    }
    return result
}

let selfCode = function (root) {
    let stack = []
    let result = []
    let current = root
    while (current || stack.length > 0) {
        while (current) {
            result.push(current.data)
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        current = current.right
    }
}