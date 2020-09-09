function getMaxDepth(root) {
    if (!root) return 0
    let left = 0, right = 0
    if (root.left)
        left = getMaxDepth(root.left)
    if (root.right)
        right = getMaxDepth(root.right)
    return Math.max(left, right) + 1
}