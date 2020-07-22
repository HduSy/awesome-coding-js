/**
 * 递归版本
 * @param root
 * @param array
 * @returns {*[]}
 */
function midTraversal(root, array = []) {
    if (root) {
        midTraversal(root.left, array)
        array.push(root.data)
        midTraversal(root.right, array)
    }
    return array
}

/**
 * 非递归版本
 * @param root
 * @param array
 * @returns {*[]}
 */
function middleTraversal(root) {
    const result = []
    const stack = []
    let current = root
    while (current || stack.length > 0) {
        //判断当前节点是否存在，若存在则进栈，并进行中序遍历
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop() //左
        result.push(current.data) //中
        current = current.right //右
    }
    return result
}

let selfCode = function (root) {
    let stack = []
    let res = []
    let current = root
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        res.push(current)
        current = current.right
    }
}
