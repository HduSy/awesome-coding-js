/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 104
 * self
 * @param {TreeNode} root
 * @return {number}
 */
let tree = require('../数据结构分类/二叉树/Tree')

let t = new tree()
t.insert(3)
t.insert(9)
t.insert(20)
t.insert(15)
t.insert(17)
var maxDepth = function (root) {
    let current = root
    let stack = []
    let res = []
    while (current || stack.length) {
        while (current) {
            res.push(current.data)
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        current = current.right
    }
    return res
};

console.log(maxDepth(t.root)) //[ 3, 9, 20, 15, 17 ]
maxDepth = function (root) {
    if (!root)
        return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}


let t2 = new tree()
t2.insert(4)
t2.insert(2)
t2.insert(3)
t2.insert(7)
t2.insert(9)
t2.insert(8)

/**
 * 队列-BFS
 * @param root
 * @returns {[]}
 */
function selfBFS(root) {
    if (!root) return null
    let queue = [root]
    let res = []
    while (queue.length) {
        let current = queue.shift()
        res.push(current.data)
        if (current.left)
            queue.push(current.left)
        if (current.right)
            queue.push(current.right)
    }
    return res
}

/**
 * 队列BFS实现
 * @param root
 * @returns {number}
 */
maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let level = 0
    let queue = [root]
    while (queue.length) {
        let len = queue.length
        while (len--) {
            let current = queue.shift()
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        level++
    }
    return level
}
console.log(maxDepth(t.root))

/**
 * 递归版DFS求最大深度
 * @param root
 * @returns {number}
 * @constructor
 */
function DFS(root) {
    if (!root)
        return 0
    let depth = 1

    function helper(root, level) {
        if (root) {
            depth = Math.max(depth, level)
            if (root.left)
                helper(root.left, level + 1)
            if (root.right)
                helper(root.right, level + 1)
        }
    }

    helper(root, depth)
    return depth
}

console.log(DFS(t2.root))