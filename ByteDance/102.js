/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 102 二叉树的层序遍历
 * BFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root)
        return [[]]
    let res = []
    let queue = [root]
    while (queue.length) {
        let n = queue.length, level = []
        for (let i = 0; i < n; i++) {
            let current = queue.shift()
            level.push(current.val)
            if (current.left)
                queue.push(current.left)
            if (current.right)
                queue.push(current.right)
        }
        res.push(level)
    }
    return res
};