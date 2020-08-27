/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
    // write code here
    if (root) {
        let tmp = root.right
        root.right = root.left
        root.left = tmp
        Mirror(root.left)
        Mirror(root.right)
    }
}