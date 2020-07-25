/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 112 路径总和
 * self BFS
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false
    let res = []
    helper(root, 0, res)
    if (res.indexOf(sum) !== -1)
        return true
    else
        return false

    function helper(node, value, res) {
        if (!node) return 0
        value += node.val
        if (!node.left && !node.right) {
            res.push(value)
        }
        if (node.left)
            helper(node.left, value, res)
        if (node.right)
            helper(node.right, value, res)
    }
};

hasPathSum = function (root, sum) {
    if (!root)
        return false
    if (!root.left && !root.right) {
        return root.val === sum
    }
    //尾调用
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}