/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 98
 * 验证二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
//未通过代码 没通过不知道为什么
var isValidBST = function (root) {
    if (!root) return true

    function helper(node) {
        if (!node) return false
        if (node.left && node.left.val >= node.val)
            return false
        if (node.right && node.right.val <= node.val)
            return false
        if (node.left)
            helper(node.left)
        if (node.right)
            helper(node.right)
        return true
    }

    return helper(root)
};
//又是递归，太漂亮了吧写出来
isValidBST = function (root) {
    function helper(node, lower, higher) {
        if (!node) return true
        if (node.val <= lower || node.val >= higher) return false
        return helper(node.left, lower, node.val) && helper(node.right, node.val, higher)
    }

    return helper(root, -Infinity, Infinity)
}
//二叉搜索树中序遍历一定是升序 没通过不知道为什么
isValidBST = function (root) {
    if (!root) return true
    let arr = []
    let stack = []
    let current = root
    while (current || stack.length) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        arr.push(current)
        current = current.right
    }
    for (let i = 0; i + 1 < arr.length; i++) {
        if (arr[i] >= arr[i + 1])
            return false
    }
    return true
}
/**
 * 如何彻底理解中序非递归遍历及各种在解题中的应用而不是只会算法本身
 * @param root
 * @returns {boolean}
 */
isValidBST = function (root) {
    let stack = []
    let inorder = -Infinity
    let current = root
    while (current && stack.length) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        //原中序遍历算法这里是把出栈元素存入res数组，中序遍历二叉搜索树结果数组res中元素一定是升序的
        if (current.val <= inorder) return false
        inorder = current.val
        current = current.right
    }
    return true
}