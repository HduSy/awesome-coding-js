/**
 * 递归版本
 * @param node
 * @param array
 */
function preTraversal(node, array) {
    if (node) {
        array.push(node)
        preTraversal(node.left, array)
        preTraversal(node.right, array)
    }
}

/**
 * 非递归版本
 * 根-左-右
 * 从根节点向左遍历到底直到左孩子为空，访问当前节点右孩子，将其作为左孩子节点重复
 * 栈结构 !Important 是为了保存已遍历节点，不重复遍历
 * @param root
 * @returns {[]}
 */
function preOrderTraversal(root) {
    let stack = [] //栈中的节点就是为了访问右孩子节点
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
    let res = []
    let current = root
    while (current || stack.length > 0) {
        while (current) {
            res.push(current)
            stack.push(current)
            current = current.left //继续向左寻找左孩子
        }
        current = stack.pop() //当前节点无左孩子because上面while退出
        current = current.right //访问当前节点右孩子，右孩子不存在时跳过while继续出栈
    }
    return res
}
