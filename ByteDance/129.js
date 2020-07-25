/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 129
 * self
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sumNumbers = function (root) {
    //DFS
    let sum = 0
    if (!root)
        return 0
    let stack = []
    let current = root
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        current = current.right
    }
    return sum
};

/**
 * DFS
 * @param root
 * @returns {*}
 */
sumNumbers = function (root) {
    const res = []
    helper(root, '', res)
    return res.reduce((acc, cur) => acc + (+cur), 0)
};

function helper(root, cur, res) {
    if (!root) return
    cur += root.val
    if (!root.left && !root.right) {
        res.push(cur)
        return
    }
    helper(root.left, cur, res)
    helper(root.right, cur, res)
}

/**
 * BFS
 * @param root
 * @returns {number|*}
 */
var sumNumbers = function (root) {
    if (!root) return 0;
    const nodes = [[root, root.val]];
    const res = [];
    while (nodes.length) {
        const [node, number] = nodes.shift();
        if (!node.left && !node.right) {
            res.push(number);
        }
        if (node.left) nodes.push([node.left, `${number}${node.left.val}`]);
        if (node.right) nodes.push([node.right, `${number}${node.right.val}`]);
    }
    return res.reduce((acc, cur) => acc + (+cur), 0);
}