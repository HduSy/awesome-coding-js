/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
    // write code here
    function getDepth(root) {
        if (!root) return 0
        let left = getDepth(root.left)
        let right = getDepth(root.right)
        return Math.max(left, right) + 1
    }
    if (!pRoot) return true
    return Math.abs(getDepth(pRoot.left) - getDepth(pRoot.right)) <= 1
}
