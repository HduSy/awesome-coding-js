const {t} = require('../数据结构分类/二叉树/Tree')

function FindPath(root, expectNumber) {
    // write code here DFS
    let res = []
    if (root) {
        FindPathCore(root, expectNumber, [], 0, res)
    }
    return res
}

/**
 *
 * @param node 选择列表
 * @param expectNumber
 * @param stack 路径
 * @param sum
 * @param result
 * @constructor
 */
function FindPathCore(node, expectNumber, stack, sum, result) {
    //做选择
    stack.push(node.val)
    sum += node.val
    //结束条件
    if (!node.left && !node.right && sum === expectNumber) {
        result.push(stack.slice())
    }
    //递归
    if (node.left) {
        FindPathCore(node.left, expectNumber, stack, sum, result)
    }
    if (node.right) {
        FindPathCore(node.right, expectNumber, stack, sum, result)
    }
    //撤销选择
    stack.pop()
}

console.log(FindPath(t.root, 4))
